/* ============================================================
   RECLAIMED GROUP — Main Initialization & Utilities
   ============================================================ */

/* ── Toast ───────────────────────────────── */
let _toastTimer;

function showToast(msg) {
  let t = document.getElementById('rc-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'rc-toast';
    t.className = 'toast';
    t.innerHTML = `
      <span class="toast-icon" aria-hidden="true">✓</span>
      <span class="toast-msg"></span>
      <button class="toast-close" onclick="hideToast()" aria-label="Dismiss">×</button>
    `;
    document.body.appendChild(t);
  }
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(hideToast, 3200);
}

function hideToast() {
  document.getElementById('rc-toast')?.classList.remove('show');
}

/* ── Mobile Nav ──────────────────────────── */
function toggleMobileNav() {
  const mn  = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger-btn');
  if (!mn) return;
  const open = mn.classList.toggle('open');
  btn?.setAttribute('aria-expanded', open ? 'true' : 'false');
}

/* ── Cart Sidebar ────────────────────────── */
function _ensureCartDOM() {
  if (document.getElementById('rc-cart-sidebar')) return;

  const overlay = document.createElement('div');
  overlay.id = 'rc-cart-overlay';
  overlay.className = 'cart-overlay';
  overlay.addEventListener('click', closeCart);
  document.body.appendChild(overlay);

  const sidebar = document.createElement('div');
  sidebar.id = 'rc-cart-sidebar';
  sidebar.className = 'cart-sidebar';
  sidebar.setAttribute('role', 'dialog');
  sidebar.setAttribute('aria-modal', 'true');
  sidebar.setAttribute('aria-label', 'Shopping cart');
  sidebar.innerHTML = `
    <div class="cart-header">
      <div class="cart-title">Your Cart</div>
      <button class="cart-close" onclick="closeCart()" aria-label="Close cart">×</button>
    </div>
    <div class="cart-items" id="rc-cart-items"></div>
    <div class="cart-footer">
      <div class="cart-total">
        <span class="cart-total-label">Estimated Total</span>
        <span class="cart-total-val" id="rc-cart-total">$0.00</span>
      </div>
      <a href="contact.html?from=cart" class="btn btn-primary btn-full" onclick="closeCart()">
        Contact to Order &rarr;
      </a>
      <div class="cart-note">
        We don't process payments online. After you submit your order inquiry,
        we'll reach out within 24 hours to confirm details and arrange secure payment.
      </div>
    </div>
  `;
  document.body.appendChild(sidebar);
}

function openCart() {
  _ensureCartDOM();
  _renderCartItems();
  document.getElementById('rc-cart-overlay')?.classList.add('open');
  document.getElementById('rc-cart-sidebar')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('rc-cart-overlay')?.classList.remove('open');
  document.getElementById('rc-cart-sidebar')?.classList.remove('open');
  document.body.style.overflow = '';
}

function _renderCartItems() {
  const container = document.getElementById('rc-cart-items');
  const totalEl   = document.getElementById('rc-cart-total');
  if (!container) return;

  if (cart.items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon" aria-hidden="true">🛒</div>
        <p>Your cart is empty.</p>
        <a href="shop.html" class="btn btn-ghost btn-sm" onclick="closeCart()">Browse Products</a>
      </div>
    `;
  } else {
    container.innerHTML = cart.items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">
          <div style="width:100%;height:100%;background:${item.gradient};display:flex;align-items:center;justify-content:center;font-size:1.6rem"
               aria-hidden="true">${item.icon}</div>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeCartQty(${item.id}, ${item.qty - 1})" aria-label="Decrease quantity">−</button>
            <span class="qty-num" aria-label="Quantity: ${item.qty}">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${item.id}, ${item.qty + 1})" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.id})" aria-label="Remove ${item.name}">✕</button>
      </div>
    `).join('');
  }

  if (totalEl) totalEl.textContent = '$' + cart.total().toFixed(2);
}

function changeCartQty(id, qty) {
  cart.setQty(id, qty);
  _renderCartItems();
  _updateCartCount();
}

function removeCartItem(id) {
  cart.remove(id);
  _renderCartItems();
  _updateCartCount();
}

function _updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.count();
}

/* ── Product Card ────────────────────────── */
function productCard(p, withOverlay = true) {
  return `
    <article class="product-card" onclick="window.location='product.html?id=${p.id}'" role="link" tabindex="0"
             onkeydown="if(event.key==='Enter')window.location='product.html?id=${p.id}'"
             aria-label="View ${p.name}">
      <div class="product-image">
        <div class="product-image-bg" style="background:${p.gradient}" aria-hidden="true">
          <span style="font-size:3rem">${p.icon}</span>
        </div>
        ${p.badge ? `<div class="product-badge ${p.badgeType}" aria-label="${p.badge}">${p.badge}</div>` : ''}
        ${withOverlay ? `
          <div class="product-overlay" aria-hidden="true">
            <button class="btn btn-ghost"
              onclick="event.stopPropagation();addToCart(${p.id})"
              aria-label="Add ${p.name} to cart">
              + Add to Cart
            </button>
          </div>
        ` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sub">${p.subtitle}</div>
        <div class="product-footer">
          <div class="product-price">$${p.price.toFixed(2)}</div>
          <button class="btn btn-ghost btn-sm"
            onclick="event.stopPropagation();addToCart(${p.id})"
            aria-label="Add ${p.name} to cart">
            + Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(id) {
  const p = getProductById(id);
  if (!p) return;
  cart.add(p);
  _updateCartCount();
  showToast(`${p.name} added to cart ✓`);
}

/* ── Pre-fill contact form from cart ─────── */
function _prefillCartOrder() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('from') !== 'cart') return;
  const summary = cart.getOrderSummary();
  if (!summary) return;
  const msgEl = document.getElementById('message');
  if (msgEl && !msgEl.value) {
    msgEl.value = 'I would like to order the following:\n\n' + summary + '\n\nPlease contact me to confirm and arrange payment.';
  }
}

/* ── Contact / Custom Form Validation ────── */
function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const checkbox = form.querySelector('input[name="agree_policies"]');
  if (!checkbox || !checkbox.checked) {
    showToast('Please read and accept our policies first.');
    checkbox?.closest('.form-check')?.classList.add('check-error');
    return false;
  }

  // Build mailto link
  const data = new FormData(form);
  const name    = data.get('name')    || '';
  const email   = data.get('email')   || '';
  const phone   = data.get('phone')   || '';
  const subject = data.get('subject') || 'Inquiry from Website';
  const message = data.get('message') || '';

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
  );

  window.location.href = `mailto:info@reclaimedgroup.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  showToast('Opening your email client...');
  return false;
}

/* ── Init ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderCookieBanner();
  _ensureCartDOM();
  _updateCartCount();

  cart.onChange(_updateCartCount);

  // Pre-fill from cart if on contact page
  _prefillCartOrder();

  // Handle check-error class removal on checkbox change
  document.querySelectorAll('input[name="agree_policies"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) cb.closest('.form-check')?.classList.remove('check-error');
    });
  });
});
