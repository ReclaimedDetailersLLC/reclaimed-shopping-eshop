/* ============================================================
   RECLAIMED GROUP — Shared Components (Nav, Footer, Cookie)
   ============================================================ */

function _activePage() {
  const p = window.location.pathname;
  if (p.includes('shop'))           return 'shop';
  if (p.includes('custom-made'))    return 'custom';
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
    { href: 'index.html',       label: 'Home',        key: 'home'    },
    { href: 'shop.html',        label: 'Shop',        key: 'shop'    },
    { href: 'custom-made.html', label: 'Custom Made', key: 'custom'  },
    { href: 'about.html',       label: 'About',       key: 'about'   },
    { href: 'contact.html',     label: 'Contact',     key: 'contact' },
  ];

  nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">

        <a href="index.html" class="nav-logo" aria-label="Reclaimed Home">
          <div class="nav-logo-text">RE<span>CLAIMED</span></div>
          <div class="nav-logo-sub">Auto Detailing &amp; Supply</div>
        </a>

        <nav class="nav-links" aria-label="Main">
          ${links.map(l => `
            <a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>
          `).join('')}
        </nav>

        <div class="nav-actions">
          <button class="cart-btn" onclick="openCart()" aria-label="Open cart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
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

        <div class="footer-brand">
          <div class="footer-logo">RE<span>CLAIMED</span></div>
          <div class="footer-tagline">Auto Detailing &amp; Supply</div>
          <p class="footer-desc">
            Premium detailing products and custom vehicle services for those who demand the best.
            Restore. Protect. Reclaim.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Facebook">F</a>
            <a href="#" class="social-link" aria-label="Instagram">IG</a>
            <a href="#" class="social-link" aria-label="TikTok">TT</a>
            <a href="#" class="social-link" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Shop</div>
          <div class="footer-links">
            <a href="shop.html">All Products</a>
            <a href="shop.html?cat=Protection">Protection</a>
            <a href="shop.html?cat=Washing">Washing</a>
            <a href="shop.html?cat=Interior">Interior</a>
            <a href="shop.html?cat=Bundles">Bundles</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Company</div>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="custom-made.html">Custom Made</a>
            <a href="contact.html">Contact</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="cookie-policy.html">Cookie Policy</a>
            <a href="terms-conditions.html">Terms &amp; Conditions</a>
          </div>
        </div>

        <div>
          <div class="footer-heading">Get In Touch</div>
          <div class="footer-contact-row">
            <span class="footer-contact-icon">✉</span>
            <span class="footer-contact-text">info@reclaimedgroup.com</span>
          </div>
          <div class="footer-contact-row">
            <span class="footer-contact-icon">📍</span>
            <span class="footer-contact-text">Mobile service — contact us<br>for your area</span>
          </div>
          <div class="footer-contact-row">
            <span class="footer-contact-icon">🕐</span>
            <span class="footer-contact-text">Mon – Sat: 8 am – 6 pm</span>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} Reclaimed Group LLC. All rights reserved.
        </div>
        <div class="footer-legal">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="cookie-policy.html">Cookie Policy</a>
          <a href="terms-conditions.html">Terms &amp; Conditions</a>
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
      We use cookies to provide essential site functionality, analyze traffic, and improve your experience.
      By clicking <strong>Accept All</strong>, you agree to our
      <a href="cookie-policy.html">Cookie Policy</a> and
      <a href="privacy-policy.html">Privacy Policy</a>.
    </div>
    <div class="cookie-actions">
      <button class="btn btn-primary btn-sm" onclick="acceptCookies('all')">Accept All</button>
      <button class="btn btn-outline btn-sm" onclick="acceptCookies('essential')">Essential Only</button>
      <a href="cookie-policy.html" class="btn btn-ghost btn-sm">Learn More</a>
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
