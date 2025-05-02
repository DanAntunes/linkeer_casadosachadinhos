// ../js/search.js
import { productsAmazon } from './amazon.js';
import { productsML }     from './ml.js';
import { productsShopee } from './shopee.js';

document.addEventListener("DOMContentLoaded", () => {
  const siteSelect      = document.getElementById("siteSelect");
  const searchInput     = document.getElementById("productSearch");
  const resultsContainer = document.getElementById("resultsContainer");

  function getProductsBySite(site) {
    if (site === "amazon") return productsAmazon;
    if (site === "ml")     return productsML;
    if (site === "shopee") return productsShopee;
    return [];
  }

// Atualize a função renderProducts para:
function renderProducts(list) {
  resultsContainer.innerHTML = "";
  
  list.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card mb-3";

    card.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col-md-4 text-center p-3">
          <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <a href="${prod.affiliateLink}" 
               class="btn" 
               target="_blank">
               Ver Oferta <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    resultsContainer.appendChild(card);
  });
}

  function updateResults() {
    const site     = siteSelect.value;
    let products   = getProductsBySite(site);
    const query    = searchInput.value.trim().toLowerCase();

    if (query) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(query) || p.id.toLowerCase().includes(query)
      );
    }

    renderProducts(products);
  }

  siteSelect.addEventListener("change", updateResults);
  searchInput.addEventListener("input", updateResults);
});
