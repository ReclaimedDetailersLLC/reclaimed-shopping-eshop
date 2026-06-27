/* ============================================================
   RECLAIMED CO. — Shared Components
   ============================================================ */

function _activePage() {
  const p = window.location.pathname;
  if (p.includes('shop'))           return 'shop';
  if (p.includes('collections'))    return 'collections';
  if (p.includes('custom'))         return 'custom';
  if (p.includes('about'))          return 'about';
  if (p.includes('contact'))        return 'contact';
  if (p.includes('product'))        return 'shop';
  return 'home';
}

/* ── Navigation ──────────────────────────── */
function renderNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const active = _activePage();
  const links = [
    { href: 'collections.html', label: 'Collections', key: 'collections' },
    { href: 'shop.html',        label: 'Shop',        key: 'shop' },
    { href: 'custom-made.html', label: 'Custom Made', key: 'custom' },
    { href: 'about.html',       label: 'Our Story',   key: 'about' },
    { href: 'contact.html',     label: 'Contact',     key: 'contact' },
  ];

  nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">

        <a href="index.html" class="nav-logo" aria-label="Reclaimed Home">
          <div class="nav-logo-mark">RECLAIMED.</div>
          <div class="nav-logo-sub">Wear Your Story</div>
        </a>

        <nav class="nav-links" aria-label="Main navigation">
          ${links.map(l => `
            <a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>
          `).join('')}
        </nav>

        <div class="nav-actions">
          <button class="cart-btn" onclick="openCart()" aria-label="Open shopping cart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Cart
            <span class="cart-count" id="cart-count">0</span>
          </button>
          <button class="hamburger" id="hamburger-btn" onclick="toggleMobileNav()" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>
    </div>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
      ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
    </nav>
  `;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── Footer ──────────────────────────────── */
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">

        <div>
          <div class="footer-logo">RECLAIMED.</div>
          <div class="footer-tagline">Wear Your Story</div>
          <p class="footer-desc">
            Faith-inspired apparel and handmade goods for those who know what they've been brought through —
            and aren't afraid to wear it.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Instagram">IG</a>
            <a href="#" class="social-link" aria-label="TikTok">TT</a>
            <a href="#" class="social-link" aria-label="Facebook">FB</a>
            <a href="#" class="social-link" aria-label="Pinterest">P</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Shop</div>
          <div class="footer-links">
            <a href="shop.html">All Products</a>
            <a href="collections.html">Collections</a>
            <a href="shop.html?cat=Hoodies">Hoodies</a>
            <a href="shop.html?cat=Tees">Tees</a>
            <a href="shop.html?cat=Jewelry">Jewelry</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Company</div>
          <div class="footer-links">
            <a href="about.html">Our Story</a>
            <a href="custom-made.html">Custom Made</a>
            <a href="contact.html">Contact</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="cookie-policy.html">Cookie Policy</a>
            <a href="terms-conditions.html">Terms &amp; Conditions</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Contact</div>
          <div class="footer-contact-row">
            <span class="footer-contact-icon">✉</span>
            <span class="footer-contact-text">reclaimedgroup@gmail.com</span>
          </div>
          <div class="footer-contact-row">
            <span class="footer-contact-icon">🕐</span>
            <span class="footer-contact-text">Mon – Fri: 9 am – 5 pm CST<br>We respond within 24 hours</span>
          </div>
          <div class="footer-contact-row" style="margin-top:16px">
            <span class="footer-contact-text" style="font-style:italic;color:rgba(248,245,240,.3);font-size:.78rem">
              "He restores my soul." — Psalm 23:3
            </span>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} Reclaimed. All rights reserved. Handmade with purpose.
        </div>
        <div class="footer-legal">
          <a href="privacy-policy.html">Privacy</a>
          <a href="cookie-policy.html">Cookies</a>
          <a href="terms-conditions.html">Terms</a>
        </div>
      </div>

    </div>
  `;
}

/* ── Cookie Banner ───────────────────────── */
function renderCookieBanner() {
  if (localStorage.getItem('rc_cookies')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'rc-cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = `
    <div class="cookie-icon" aria-hidden="true">🍪</div>
    <div class="cookie-text">
      We use cookies for essential site function and to understand how people find us.
      Read our <a href="cookie-policy.html">Cookie Policy</a> and
      <a href="privacy-policy.html">Privacy Policy</a> to learn more.
    </div>
    <div class="cookie-actions">
      <button class="btn btn-sm" onclick="acceptCookies('all')">Accept All</button>
      <button class="btn btn-outline btn-sm" onclick="acceptCookies('essential')">Essential Only</button>
    </div>
  `;

  document.body.appendChild(banner);
  requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('visible')));
}

function acceptCookies(level) {
  localStorage.setItem('rc_cookies', level);
  const banner = document.getElementById('rc-cookie-banner');
  if (banner) {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  }
}
