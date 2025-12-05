(function () {
  // helpful DOM refs
  const orderSummary = document.getElementById('orderSummary');
  const totalsBox = document.getElementById('summaryTotals');
  const snackbar = document.getElementById('snackbar');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  const continueBtn = document.getElementById('checkoutContinue');

  // Try to reuse the cart functions from your cart.js if available.
  // Fallback to scanning a few likely localStorage keys.
  function readStoredCart() {
    if (typeof getCart === 'function') {
      try { return getCart(); } catch (e) {}
    }

    const candidateKeys = ['olakay_cart_v1','CART','cart'];
    for (const k of candidateKeys) {
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      try {
        const parsed = JSON.parse(raw);
        // if object with items property (your cart.js uses { items: {...} })
        if (parsed && typeof parsed === 'object') {
          if (parsed.items) return parsed;
          // if it's an array of items, convert to { items: {id: item} }
          if (Array.isArray(parsed)) {
            const items = {};
            parsed.forEach(it => { items[it.id || it.productId || Math.random()] = it; });
            return { items };
          }
        }
      } catch (e) {}
    }
    return { items: {} };
  }

  // Save cart - prefer saveCart if available
  function persistCart(cartObj) {
    if (typeof saveCart === 'function') {
      try { return saveCart(cartObj); } catch (e) {}
    }
    // fallback: write to first key we find or to 'olakay_cart_v1'
    const key = localStorage.getItem('olakay_cart_v1') ? 'olakay_cart_v1' : (localStorage.getItem('CART') ? 'CART' : 'olakay_cart_v1');
    try {
      localStorage.setItem(key, JSON.stringify(cartObj));
      // dispatch a storage event for other tabs/scripts
      window.dispatchEvent(new Event('storage'));
    } catch (e) { console.warn('Could not save cart', e); }
  }

  // Utility: normalize an item (qty may be qty or quantity)
  function normalizeItem(it) {
    return {
      id: it.id || it.productId || (it.id===0?0:String(Math.random())),
      name: it.name || it.title || 'Product',
      image: (it.image || it.images && it.images[0]) || '',
      price: Number(it.price || it.amount || 0),
      qty: Number(it.qty || it.quantity || 1)
    };
  }

  function showToast(msg = 'Done') {
    if (!snackbar) { alert(msg); return; }
    snackbar.textContent = msg;
    snackbar.style.display = 'block';
    snackbar.style.opacity = '1';
    setTimeout(()=> {
      snackbar.style.opacity = '0';
      setTimeout(()=> snackbar.style.display='none', 300);
    }, 1300);
  }

  // Render order summary
  function renderOrderSummary() {
    const cartObj = readStoredCart();
    const itemsArr = Object.values(cartObj.items || {});
    orderSummary.innerHTML = '';

    if (!itemsArr.length) {
      orderSummary.innerHTML = '<p class="text-muted">Your cart is empty.</p>';
      totalsBox.innerHTML = '';
      return;
    }

    let subtotal = 0;

    itemsArr.forEach(rawItem => {
      const item = normalizeItem(rawItem);
      const line = item.price * item.qty;
      subtotal += line;

      const el = document.createElement('div');
      el.className = 'checkout-item';
      el.dataset.id = item.id;
      el.innerHTML = `
        <img class="chk-img" src="${item.image || 'placeholder.png'}" alt="${escapeHtml(item.name)}">
        <div style="min-width: 0;">
          <p class="chk-name">${escapeHtml(item.name)}</p>
          <p class="chk-meta">₦${Number(item.price).toLocaleString()} &times; ${item.qty}</p>
          <div style="margin-top:6px;">
            <div class="qty-controls">
              <button class="btn-qty-minus" data-id="${item.id}" type="button">−</button>
              <input class="qty-input" data-id="${item.id}" type="number" value="${item.qty}" min="1">
              <button class="btn-qty-plus" data-id="${item.id}" type="button">+</button>
              <button class="btn btn-link btn-sm text-danger remove-item" data-id="${item.id}" style="margin-left:8px;">Remove</button>
            </div>
          </div>
        </div>
        <div class="chk-total">₦${line.toLocaleString()}</div>
      `;
      orderSummary.appendChild(el);
    });

    // delivery fee logic (simple)
    const deliveryFee = subtotal > 0 ? 2000 : 0;
    const total = subtotal + deliveryFee;

    totalsBox.innerHTML = `
      <div class="summary-row"><div>Subtotal</div><div>₦${subtotal.toLocaleString()}</div></div>
      <div class="summary-row"><div>Delivery</div><div>₦${deliveryFee.toLocaleString()}</div></div>
      <hr>
      <div class="summary-row" style="font-weight:700"><div>Total</div><div>₦${total.toLocaleString()}</div></div>
    `;
  }

  // Helpers to change qty/remove
  function updateItemQty(id, newQty) {
    const cartObj = readStoredCart();
    if (!cartObj.items || !cartObj.items[id]) return;
    cartObj.items[id].qty = Math.max(1, Number(newQty) || 1);
    persistCart(cartObj);
    if (typeof updateCartBadge === 'function') updateCartBadge();
    renderOrderSummary();
  }

  function removeItem(id) {
    const cartObj = readStoredCart();
    if (!cartObj.items || !cartObj.items[id]) return;
    delete cartObj.items[id];
    persistCart(cartObj);
    if (typeof updateCartBadge === 'function') updateCartBadge();
    renderOrderSummary();
    showToast('Removed from cart');
  }

  // Utility safe html escape for item names
  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
  }

  // event delegation for qty + - and remove
  orderSummary && orderSummary.addEventListener('click', function(e) {
    const t = e.target;
    if (t.classList.contains('btn-qty-plus')) {
      const id = t.dataset.id;
      const input = document.querySelector(`.qty-input[data-id="${id}"]`);
      const val = Number((input && input.value) || 1) + 1;
      if (input) input.value = val;
      updateItemQty(id, val);
    } else if (t.classList.contains('btn-qty-minus')) {
      const id = t.dataset.id;
      const input = document.querySelector(`.qty-input[data-id="${id}"]`);
      const val = Math.max(1, Number((input && input.value) || 1) - 1);
      if (input) input.value = val;
      updateItemQty(id, val);
    } else if (t.classList.contains('remove-item')) {
      const id = t.dataset.id;
      if (confirm('Remove this item from your cart?')) removeItem(id);
    }
  });

  // input change on direct number edits
  orderSummary && orderSummary.addEventListener('change', function(e) {
    const t = e.target;
    if (t.classList.contains('qty-input')) {
      const id = t.dataset.id;
      const val = Math.max(1, Number(t.value) || 1);
      t.value = val;
      updateItemQty(id, val);
    }
  });

  // Place order button behavior: simple demo (clear cart + message)
  placeOrderBtn && placeOrderBtn.addEventListener('click', function () {
    // basic validation
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const addr = document.getElementById('address').value.trim();
    if (!name || !phone || !addr) {
      showToast('Please fill name, phone and address');
      return;
    }

    // create a demo "order" object (you can send this to backend when ready)
    const cartObj = readStoredCart();
    const items = Object.values(cartObj.items || {});
    if (!items.length) { showToast('Cart is empty'); return; }

    // fake order processing...
    showToast('Placing order...');

    // Clear cart: prefer existing remove function if you have one, else save empty
    const empty = { items: {} };
    persistCart(empty);
    if (typeof updateCartBadge === 'function') updateCartBadge();

    setTimeout(()=> {
      showToast('Order placed — demo');
      // optional: redirect to a thank-you page
      // window.location.href = 'order-success.html';
      renderOrderSummary();
    }, 800);
  });

  // continue shopping
  continueBtn && continueBtn.addEventListener('click', () => window.location.href = 'eC-site-Shop.html');

  // initial render
  document.addEventListener('DOMContentLoaded', renderOrderSummary);
  // rerender when other tabs change localStorage
  window.addEventListener('storage', renderOrderSummary);
})();