 // Put this near the top of shop.js (above renderShopPage)
function renderStars(rating = 0) {
  const r = Math.max(0, Math.min(5, Number(rating) || 0)); // clamp 0..5
  const full = Math.floor(r);
  const half = (r - full) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = '';

  for (let i = 0; i < full; i++) html += '<i class="bi bi-star-fill" style="color:#f59b00"></i> ';
  if (half) html += '<i class="bi bi-star-half" style="color:#f59b00"></i> ';
  for (let i = 0; i < empty; i++) html += '<i class="bi bi-star" style="color:#f59b00"></i> ';

  return html;
}

// helper: escape user input for safe HTML injection
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// show friendly "no results" UI
function showNoResults(searchText) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const safe = escapeHtml(searchText);
  container.innerHTML = `
    <div class="no-results-wrap">
      <h3>There are no results for “<span class="no-results-term">${safe}</span>”.</h3>
      <ul class="no-results-tips">
        <li>Check your spelling for typing errors</li>
        <li>Try searching with short and simple keywords</li>
        <li>Try searching more general terms — you can then filter the results</li>
      </ul>
      <div class="mt-3">
        <a href="eC-site.html" class="btn btn-add w-50">Go to home page</a>
      </div>
    </div>
  `;
}

// updated search handler (replace your existing search listener)
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const searchText = searchInput.value.trim().toLowerCase();

    // if empty search, show full list
    if (!searchText) {
      renderShopPage(PRODUCTS);
      return;
    }

    const filteredProducts = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(searchText)
      || (product.brand && product.brand.toLowerCase().includes(searchText))
      || (product.description && product.description.toLowerCase().includes(searchText))
    );

    if (!filteredProducts || filteredProducts.length === 0) {
      showNoResults(searchInput.value);
    } else {
      renderShopPage(filteredProducts);
    }
  });
} else {
  console.warn('searchInput not found — add id="searchInput" to your search input element.');
}
 
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
        const si = document.getElementById('searchInput');
        if (si) {
            si.value = q;
            si.dispatchEvent(new Event('keyup'));
            si.focus();
        } else {
            const filtered = PRODUCTS.filter(p => p.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
            renderShopPage(filtered);
        }
    } else {

    }
});

// const swiper = new Swiper("#promoSwiper", {
//   slidesPerView: 1.1,
//   spaceBetween: 10,
//   centeredSlides: false,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
// });
const swiper = new Swiper("#promoSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});