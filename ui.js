// ===== WISHLIST =====
const Wishlist = {
  getWishlist() {
    try { return JSON.parse(localStorage.getItem('luxe_wishlist')) || []; }
    catch { return []; }
  },
  saveWishlist(list) {
    localStorage.setItem('luxe_wishlist', JSON.stringify(list));
    this.updateButtons();
    window.dispatchEvent(new Event('wishlistUpdated'));
  },
  addToWishlist(productId) {
    const list = this.getWishlist();
    if (list.includes(productId)) return;
    list.push(productId);
    this.saveWishlist(list);
    const p = products.find(p => p.id === productId);
    showToast(`${p ? p.name : 'Item'} saved to wishlist`, 'success', '♥');
  },
  removeFromWishlist(productId) {
    const list = this.getWishlist().filter(id => id !== productId);
    this.saveWishlist(list);
    showToast('Removed from wishlist', 'info', '🗑️');
  },
  toggle(productId) {
    if (this.isWishlisted(productId)) this.removeFromWishlist(productId);
    else this.addToWishlist(productId);
  },
  isWishlisted(productId) {
    return this.getWishlist().includes(productId);
  },
  updateButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlistId);
      btn.classList.toggle('wishlisted', this.isWishlisted(id));
      btn.setAttribute('aria-pressed', this.isWishlisted(id));
    });
  }
};

// ===== AUTH =====
const Auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('luxe_user')); }
    catch { return null; }
  },
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('luxe_users') || '[]');
    const user = users.find(u => u.email === email && u.password === btoa(password));
    if (!user) return { success: false, error: 'Invalid email or password.' };
    localStorage.setItem('luxe_user', JSON.stringify({ id: user.id, name: user.name, email: user.email, phone: user.phone }));
    return { success: true, user };
  },
  register(name, email, password, phone = '') {
    const users = JSON.parse(localStorage.getItem('luxe_users') || '[]');
    if (users.find(u => u.email === email)) return { success: false, error: 'Email already registered.' };
    const user = { id: Date.now(), name, email, phone, password: btoa(password), orders: [], addresses: [] };
    users.push(user);
    localStorage.setItem('luxe_users', JSON.stringify(users));
    localStorage.setItem('luxe_user', JSON.stringify({ id: user.id, name, email, phone }));
    return { success: true, user };
  },
  logout() {
    localStorage.removeItem('luxe_user');
    window.location.href = 'login.html';
  },
  isLoggedIn() { return !!this.getUser(); },
  updateProfile(data) {
    const user = this.getUser();
    if (!user) return false;
    const updated = { ...user, ...data };
    localStorage.setItem('luxe_user', JSON.stringify(updated));
    const users = JSON.parse(localStorage.getItem('luxe_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) { users[idx] = { ...users[idx], ...data }; localStorage.setItem('luxe_users', JSON.stringify(users)); }
    return true;
  }
};

// ===== FILTER =====
const Filter = {
  state: {
    search: '', categories: [], minPrice: 0, maxPrice: 200000, rating: 0, sort: 'newest'
  },
  debounceTimer: null,
  setSearch(value) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => { this.state.search = value; this.apply(); }, 300);
  },
  setCategory(cat, checked) {
    if (checked) this.state.categories.push(cat);
    else this.state.categories = this.state.categories.filter(c => c !== cat);
    this.apply();
  },
  setPrice(min, max) { this.state.minPrice = min; this.state.maxPrice = max; this.apply(); },
  setRating(r) { this.state.rating = r; this.apply(); },
  setSort(s) { this.state.sort = s; this.apply(); },
  filter(list) {
    let out = list.filter(p => {
      if (this.state.search && !p.name.toLowerCase().includes(this.state.search.toLowerCase()) && !p.category.toLowerCase().includes(this.state.search.toLowerCase())) return false;
      if (this.state.categories.length && !this.state.categories.includes(p.category)) return false;
      if (p.price < this.state.minPrice || p.price > this.state.maxPrice) return false;
      if (p.rating < this.state.rating) return false;
      return true;
    });
    switch (this.state.sort) {
      case 'price-asc': out.sort((a,b) => a.price - b.price); break;
      case 'price-desc': out.sort((a,b) => b.price - a.price); break;
      case 'newest': out.sort((a,b) => (b.newest ? 1 : 0) - (a.newest ? 1 : 0)); break;
      case 'bestseller': out.sort((a,b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)); break;
      case 'rating': out.sort((a,b) => b.rating - a.rating); break;
    }
    return out;
  },
  apply() { window.dispatchEvent(new CustomEvent('filterChanged')); }
};

// ===== UI UTILITIES =====
function showToast(message, type = 'success', icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span><button class="toast-close" aria-label="Close">✕</button>`;
  container.appendChild(toast);
  toast.querySelector('.toast-close').onclick = () => removeToast(toast);
  setTimeout(() => removeToast(toast), 4000);
}
function removeToast(toast) {
  toast.classList.add('toast-exit');
  setTimeout(() => toast.remove(), 300);
}

function renderStars(rating) {
  const full = Math.floor(rating), half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) s += '★';
    else if (i === full && half) s += '⯨';
    else s += '☆';
  }
  return s;
}

function formatPrice(n) { return '₹' + n.toLocaleString('en-US', { minimumFractionDigits: 0 }); }

function renderProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  const wishlisted = Wishlist.isWishlisted(product.id);
  return `
    <article class="product-card" data-product-id="${product.id}" aria-label="${product.name}">
      <div class="product-card-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge badge-${product.badge}">${product.badge === 'sale' && discount ? `-${discount}%` : product.badge}</span>` : ''}
        <button class="product-card-wishlist ${wishlisted ? 'wishlisted' : ''}" data-wishlist-id="${product.id}" aria-label="${wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}" aria-pressed="${wishlisted}" onclick="Wishlist.toggle(${product.id}); this.classList.toggle('wishlisted'); event.stopPropagation();">♥</button>
        <div class="product-card-quick-add">
          <button class="btn btn-primary btn-sm" onclick="quickAddToCart(${product.id}); event.stopPropagation();">Quick Add</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <h3 class="product-card-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span>${product.rating} (${product.reviews})</span>
        </div>
      </div>
      <div class="product-card-actions">
        <button class="btn btn-primary btn-sm" style="flex:1" onclick="quickAddToCart(${product.id})">Add to Cart</button>
        <button class="btn btn-secondary btn-sm btn-icon" onclick="window.location.href='product.html?id=${product.id}'" aria-label="View details">→</button>
      </div>
    </article>`;
}

function quickAddToCart(productId) {
  const p = products.find(p => p.id === productId);
  if (!p) return;
  const size = p.sizes[0] || 'One Size';
  const color = p.colors[0] || '#000';
  Cart.addToCart(productId, size, color, 1);
}

// Navbar scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Hamburger menu
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileNav.classList.toggle('open');
      ham.setAttribute('aria-expanded', ham.classList.contains('open'));
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      const parent = btn.closest('.tabs-wrapper') || document;
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const content = parent.querySelector(`[data-tab-content="${target}"]`);
      if (content) content.classList.add('active');
    });
  });

  // Wishlist button states
  Wishlist.updateButtons();
});
