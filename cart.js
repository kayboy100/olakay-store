const CART_KEY = 'olakay_cart_v1';

// get cart object
function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : { items: {} };
}

// save cart object
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  // dispatch event for other tabs/pages (optional)
  window.dispatchEvent(new Event('storage'));
}

// add product by id, qty default 1
function addToCart(id, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return false;
  const cart = getCart();
  if (!cart.items[id]) {
    cart.items[id] = { id: prod.id, name: prod.name, price: prod.price, image: prod.images[0], qty: 0 };
  }
  cart.items[id].qty = (cart.items[id].qty || 0) + qty;
  saveCart(cart);
  updateCartBadge();
  return true;
}

function removeFromCart(id) {
  const cart = getCart();
  if (cart.items[id]) {
    delete cart.items[id];
    saveCart(cart);
    updateCartBadge();
  }
}

function updateQty(id, qty) {
  const cart = getCart();
  if (!cart.items[id]) return;
  if (qty <= 0) delete cart.items[id];
  else cart.items[id].qty = qty;
  saveCart(cart);
  updateCartBadge();
}

function cartItemCount() {
  const cart = getCart();
  return Object.values(cart.items).reduce((s, it) => s + (it.qty || 0), 0);
}

// update dom badge with id="cart-badge" if exists
function updateCartBadge() {
  const el = document.getElementById('cart-badge');
  if (!el) return;
  const count = cartItemCount();
  if (count > 0) {
    el.style.display = 'inline-block';
    el.textContent = count;
  } else {
    el.style.display = 'none';
  }
}

// run on load so badge is correct
document.addEventListener('DOMContentLoaded', updateCartBadge);

// optional: update badge when localStorage changes in other tabs
window.addEventListener('storage', updateCartBadge);

// 🔄 Auto-load cart content when page opens
document.addEventListener("DOMContentLoaded", renderCartPage);

// 🔁 Refresh cart when items change
window.addEventListener("storage", renderCartPage);

// change quantity by delta (+1 or -1)
function changeQty(id, delta) {
  const cart = getCart();
  if (!cart || !cart.items || !cart.items[id]) return;
  const newQty = Math.max(1, (cart.items[id].qty || 1) + delta);
  cart.items[id].qty = newQty;
  saveCart(cart);
  if (typeof updateCartBadge === 'function') updateCartBadge();
  // re-render cart UI
  renderCartPage();
}

// render cart page with quantity controls
function renderCartPage() {
  const cartContainer = document.getElementById("cart-items");
  const emptyMsg = document.getElementById("emptyCartMsg");
  const subtotalEl = document.getElementById("subtotal");
  if (!cartContainer) return;

  const cart = getCart() || { items: {} };
  const items = Object.values(cart.items || {});
  cartContainer.innerHTML = "";

  if (items.length === 0) {
    if (emptyMsg) emptyMsg.style.display = "block";
    const summary = document.getElementById('cartSummary') || document.querySelector('.cart-summary');
    if (summary) summary.style.display = 'none'
    if (subtotalEl) subtotalEl.textContent = "₦0";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";

  let subtotal = 0;
  items.forEach(item => {
    const lineTotal = (Number(item.price) || 0) * (Number(item.qty) || 1);
    subtotal += lineTotal;

    const el = document.createElement("div");
    el.className = "card mb-3 p-3 shadow-sm";
    el.innerHTML = `
      <div class="row align-items-center gx-3">
        <div class="col-auto">
          <img src="${item.image || ''}" width="80" class="rounded" alt="${item.name}">
        </div>

        <div class="col">
          <p class="mb-1"><small>${item.name}</small></h6>
          <p class="mb-1 text-muted"><small>₦${(Number(item.price)||0).toLocaleString()}</small></p>
          <p class="mb-0 small text-muted">Line total: ₦${lineTotal.toLocaleString()} <small><small>x${item.qty}</small></small></p>
          <p class="mb-0 small text-muted"></p>
        </div>
          <div class="bottom-controls mt-3">
            <div class="remove-wrap">
              <button class="btn btn-outline-danger btn-sm remove-inline" data-id="${item.id}">
                <i class="bi bi-trash"></i> Remove
              </button>
            </div>

            <div class="qty-wrap">
              <div class="qty-controls">
                <button class="btn-qty btn-qty-minus" data-id="${item.id}" type="button">━</button>
                <div class="qty-display">${item.qty}</div>
                <button class="btn-qty btn-qty-plus" data-id="${item.id}" type="button">+</button>
              </div>
            </div>
          </div>
        </div>
      
    `;
    cartContainer.appendChild(el);
  });

  if (subtotalEl) subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;

  // attach events (we re-create DOM each render so attach after)
  cartContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.id, +1));
  });
  cartContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.id, -1));
  });
  cartContainer.querySelectorAll('.remove-inline').forEach(btn => {
    btn.addEventListener('click', () => {
      // optional: confirm before remove
      if (confirm('Are you sure you want to remove this item from cart?')) {
        removeFromCart(btn.dataset.id);
        renderCartPage();
      }
    });
  });
}

// ensure cart UI shows when cart page loads and when storage changes
document.addEventListener("DOMContentLoaded", renderCartPage);
window.addEventListener("storage", renderCartPage);