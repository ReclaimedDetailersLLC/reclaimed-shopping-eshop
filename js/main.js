/* ============================================================
   RECLAIMED CO. — Main Initialization & Utilities
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
      <a href="contact.html?from=cart" class="btn btn-dark btn-full" onclick="closeCart()">
        Inquire to Order &rarr;
      </a>
      <div class="cart-note">
        We don't process payments online yet — your cart summary will be included when you reach out,
        and we'll confirm your order and arrange secure payment together.
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
        <div class="cart-empty-icon" aria-hidden="true">🛍</div>
        <p>Your cart is empty.</p>
        <a href="shop.html" class="btn btn-outline btn-sm" onclick="closeCart()" style="margin-top:8px">Browse the Shop</a>
      </div>
    `;
  } else {
    container.innerHTML = cart.items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">
          <div style="width:100%;height:100%;background:${item.bgColor};display:flex;align-items:center;justify-content:center" aria-hidden="true">
            <span style="font-family:'Playfair Display',serif;font-size:.65rem;font-weight:700;color:${item.textColor};letter-spacing:.05em;text-align:center;padding:4px">RCL.</span>
          </div>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-collection">${item.collection}</div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-color">${item.variant}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px">
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="changeCartQty(${item.id}, ${item.qty - 1})" aria-label="Decrease quantity">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeCartQty(${item.id}, ${item.qty + 1})" aria-label="Increase quantity">+</button>
            </div>
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
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
function productCard(p) {
  const swatchHTML = p.swatches && p.swatches.length > 1 ? `
    <div class="product-swatches">
      ${p.swatches.map((s, i) => `
        <span class="swatch ${i === 0 ? 'active' : ''}"
              style="background:${s}"
              title="${p.swatchNames[i]}"
              aria-label="${p.swatchNames[i]}"></span>
      `).join('')}
    </div>
  ` : '';

  return `
    <article class="product-card"
             onclick="window.location='product.html?id=${p.id}'"
             role="link" tabindex="0"
             onkeydown="if(event.key==='Enter')window.location='product.html?id=${p.id}'"
             aria-label="View ${p.name} in ${p.variant}">
      <div class="product-img">
        <div class="product-img-swatch"
             style="background:${p.bgColor};width:100%;height:100%;display:flex;align-items:center;justify-content:center"
             aria-hidden="true">
          <span style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:${p.textColor};letter-spacing:-.01em;text-align:center;padding:20px;line-height:1.2">RECLAIMED.</span>
        </div>
        ${p.badge ? `<div class="product-badge ${p.badgeClass}">${p.badge}</div>` : ''}
        <div class="product-overlay" aria-hidden="true">
          <button class="btn btn-dark btn-sm"
            onclick="event.stopPropagation();addToCart(${p.id})"
            aria-label="Add ${p.name} to cart">
            + Add to Cart
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-collection">${p.collection}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-color">${p.variant}</div>
        ${swatchHTML}
        <div class="product-footer">
          <div class="product-price">$${p.price.toFixed(2)}</div>
          <button class="btn btn-ghost btn-sm"
            onclick="event.stopPropagation();addToCart(${p.id})"
            aria-label="Add to cart">
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
  showToast(`${p.name} — ${p.variant} added to cart`);
}

/* ── Pre-fill contact from cart ──────────── */
function _prefillCartOrder() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('from') !== 'cart') return;
  const summary = cart.getOrderSummary();
  if (!summary) return;
  const msgEl = document.getElementById('message');
  if (msgEl && !msgEl.value) {
    msgEl.value = 'Hi! I\'d like to order the following:\n\n' + summary + '\n\nPlease reach out to confirm availability and arrange payment. Thank you!';
  }
}

/* ── Form Submission ─────────────────────── */
function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const checkbox = form.querySelector('input[name="agree_policies"]');
  if (!checkbox || !checkbox.checked) {
    showToast('Please read and accept our policies to continue.');
    checkbox?.closest('.form-check')?.querySelector('.check-box')?.classList.add('check-error');
    return false;
  }

  const data   = new FormData(form);
  const name    = data.get('name')    || '';
  const email   = data.get('email')   || '';
  const phone   = data.get('phone')   || '';
  const subject = data.get('subject') || 'Inquiry — Reclaimed Co.';
  const message = data.get('message') || '';

  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
  window.location.href = `mailto:hello@reclaimedco.com?subject=${encodeURIComponent(subject)}&body=${body}`;

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
  _prefillCartOrder();

  document.querySelectorAll('input[name="agree_policies"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        cb.closest('.form-check')?.querySelector('.check-box')?.classList.remove('check-error');
      }
    });
  });
});
