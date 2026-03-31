// Shared navbar HTML
function renderNavbar() {
  return `
  <nav id="navbar" role="navigation" aria-label="Main navigation">
    <div class="container">
      <div class="navbar-inner">
        <a href="index.html" class="navbar-logo" aria-label="LUXE home">LU<span>X</span>E</a>
        <ul class="navbar-nav" role="list">
          <li><a href="index.html" class="nav-link">Home</a></li>
          <li><a href="shop.html" class="nav-link">Shop</a></li>
          <li><a href="shop.html?cat=Women" class="nav-link">Women</a></li>
          <li><a href="shop.html?cat=Men" class="nav-link">Men</a></li>
          <li><a href="shop.html?cat=Accessories" class="nav-link">Accessories</a></li>
          <li><a href="shop.html?cat=Sale" class="nav-link text-gold">Sale</a></li>
        </ul>
        <div class="navbar-actions">
          <a href="login.html" class="navbar-action-btn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="7" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          </a>
          <a href="wishlist.html" class="navbar-action-btn" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </a>
          <a href="cart.html" class="navbar-action-btn" aria-label="Shopping cart" style="position:relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span class="cart-badge hidden" aria-live="polite">0</span>
          </a>
          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
    <a href="index.html" class="mobile-nav-link">Home</a>
    <a href="shop.html" class="mobile-nav-link">Shop All</a>
    <a href="shop.html?cat=Women" class="mobile-nav-link">Women</a>
    <a href="shop.html?cat=Men" class="mobile-nav-link">Men</a>
    <a href="shop.html?cat=Accessories" class="mobile-nav-link">Accessories</a>
    <a href="shop.html?cat=Sale" class="mobile-nav-link" style="color:var(--color-gold)">Sale</a>
    <div style="border-top:1px solid var(--color-border);margin-top:16px;padding-top:16px;display:flex;gap:12px">
      <a href="login.html" class="btn btn-secondary btn-sm" style="flex:1;justify-content:center">Login</a>
      <a href="cart.html" class="btn btn-primary btn-sm" style="flex:1;justify-content:center">Cart</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="navbar-logo" style="font-size:2rem">LU<span>X</span>E</a>
          <p>Curated fashion for those who appreciate the finer things. Luxury redefined for the modern wardrobe.</p>
          <div class="footer-social">
            <a href="#" class="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.498 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.562 0-2.387-1.715-4.055-4.163-4.055-2.833 0-4.496 2.124-4.496 4.32 0 .855.329 1.771.74 2.272"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter/X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="footer-col-title">Shop</h4>
          <div class="footer-links">
            <a href="shop.html?cat=Women" class="footer-link">Women</a>
            <a href="shop.html?cat=Men" class="footer-link">Men</a>
            <a href="shop.html?cat=Accessories" class="footer-link">Accessories</a>
            <a href="shop.html?cat=Sale" class="footer-link">Sale</a>
            <a href="shop.html" class="footer-link">New Arrivals</a>
          </div>
        </div>
        <div>
          <h4 class="footer-col-title">Help</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">Shipping Info</a>
            <a href="#" class="footer-link">Returns & Exchanges</a>
            <a href="#" class="footer-link">Size Guide</a>
            <a href="#" class="footer-link">Contact Us</a>
            <a href="#" class="footer-link">FAQs</a>
          </div>
        </div>
        <div>
          <h4 class="footer-col-title">Company</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">About Us</a>
            <a href="#" class="footer-link">Sustainability</a>
            <a href="#" class="footer-link">Careers</a>
            <a href="#" class="footer-link">Press</a>
            <a href="#" class="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 LUXE. All rights reserved.</span>
        <span>Made with passion for fashion.</span>
      </div>
    </div>
  </footer>
  <div id="toast-container" role="region" aria-label="Notifications" aria-live="polite"></div>
  <button id="back-to-top" aria-label="Back to top">↑</button>`;
}

// Inject navbar and footer
document.addEventListener('DOMContentLoaded', () => {
  const navbarMount = document.getElementById('navbar-mount');
  const footerMount = document.getElementById('footer-mount');
  if (navbarMount) navbarMount.innerHTML = renderNavbar();
  if (footerMount) footerMount.innerHTML = renderFooter();
});
