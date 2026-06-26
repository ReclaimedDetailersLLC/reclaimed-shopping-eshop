/* ============================================================
   RECLAIMED GROUP — Cart Management
   ============================================================ */

class ReclaimedCart {
  constructor() {
    this._items = JSON.parse(localStorage.getItem('rc_cart') || '[]');
    this._listeners = [];
  }

  get items() { return this._items; }

  _save() {
    localStorage.setItem('rc_cart', JSON.stringify(this._items));
    this._listeners.forEach(fn => fn(this._items));
  }

  add(product, qty = 1) {
    const existing = this._items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this._items.push({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        price: product.price,
        gradient: product.gradient,
        icon: product.icon,
        qty
      });
    }
    this._save();
  }

  remove(id) {
    this._items = this._items.filter(i => i.id !== id);
    this._save();
  }

  setQty(id, qty) {
    if (qty < 1) { this.remove(id); return; }
    const item = this._items.find(i => i.id === id);
    if (item) { item.qty = qty; this._save(); }
  }

  total() {
    return this._items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  count() {
    return this._items.reduce((s, i) => s + i.qty, 0);
  }

  clear() {
    this._items = [];
    this._save();
  }

  onChange(fn) {
    this._listeners.push(fn);
  }

  getOrderSummary() {
    if (this._items.length === 0) return '';
    const lines = this._items.map(i => `• ${i.name} x${i.qty} — $${(i.price * i.qty).toFixed(2)}`);
    lines.push(`\nTotal: $${this.total().toFixed(2)}`);
    return lines.join('\n');
  }
}

const cart = new ReclaimedCart();
