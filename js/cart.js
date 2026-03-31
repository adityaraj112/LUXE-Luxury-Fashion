// ===== CART MANAGEMENT =====
const Cart = {
  getCart() {
    try { return JSON.parse(localStorage.getItem('luxe_cart')) || []; }
    catch { return []; }
  },
  saveCart(cart) {
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
    this.updateBadge();
    window.dispatchEvent(new Event('cartUpdated'));
  },
  addToCart(productId, size, color, quantity = 1) {
    const cart = this.getCart();
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    const key = `${productId}-${size}-${color}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        key, id: productId, name: product.name,
        price: product.price, image: product.images[0],
        size, color, quantity,
        category: product.category
      });
    }
    this.saveCart(cart);
    showToast(`${product.name} added to cart`, 'success', '🛒');
    return true;
  },
  removeFromCart(key) {
    const cart = this.getCart().filter(i => i.key !== key);
    this.saveCart(cart);
    showToast('Item removed from cart', 'info', '🗑️');
  },
  updateQuantity(key, quantity) {
    const cart = this.getCart();
    const item = cart.find(i => i.key === key);
    if (item) {
      if (quantity <= 0) return this.removeFromCart(key);
      item.quantity = quantity;
      this.saveCart(cart);
    }
  },
  getCartTotal() {
    return this.getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
  getCartCount() {
    return this.getCart().reduce((sum, i) => sum + i.quantity, 0);
  },
  clearCart() {
    localStorage.removeItem('luxe_cart');
    this.updateBadge();
    window.dispatchEvent(new Event('cartUpdated'));
  },
  updateBadge() {
    const count = this.getCartCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  },
  applyDiscount(code) {
    const codes = { 'LUXE10': 0.10, 'LUXE20': 0.20, 'WELCOME': 0.15, 'VIP30': 0.30 };
    return codes[code.toUpperCase()] || null;
  }
};

// Init badge on load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
window.addEventListener('cartUpdated', () => Cart.updateBadge());
