/* ==========================================================================
   PRODUCT PAGE COMPONENT
   ========================================================================== */

const ProductPage = {
  currentProduct: null,

  // Initialize product page
  init: function(params = {}) {
    const productId = params.id;
    if (!productId) {
      Router.navigateTo('shop');
      return;
    }

    this.currentProduct = DataService.getProductById(productId);
    if (!this.currentProduct) {
      Utils.showMessage('Product not found!', 'error');
      Router.navigateTo('shop');
      return;
    }

    this.render();
    this.bindEvents();
  },

  // Render product page content
  render: function() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent || !this.currentProduct) return;

    const product = this.currentProduct;
    const originalPriceHtml = product.originalPrice ? 
      `<span class="product-original-price">${Utils.formatPrice(product.originalPrice)}</span>` : '';

    const featuresHtml = product.features ? `
      <div class="product-features">
        <h3>Features</h3>
        <ul>
          ${product.features.map(feature => `<li>${Utils.sanitizeHtml(feature)}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    mainContent.innerHTML = `
      <div class="page active" id="product-page">
        <div class="container">
          <div class="product-detail">
            <div class="product-images">
              <div class="main-product-image" style="background-image: url('${product.image}')"></div>
            </div>

            <div class="product-details">
              <h1>${Utils.sanitizeHtml(product.name)}</h1>

              <div class="product-price">
                ${Utils.formatPrice(product.price)}
                ${originalPriceHtml}
              </div>

              <div class="product-rating">
                <span class="stars">${Utils.generateStars(product.rating)}</span>
                <span>(${product.reviews} reviews)</span>
              </div>

              <p class="product-description">${Utils.sanitizeHtml(product.description)}</p>

              ${featuresHtml}

              <div class="product-actions">
                <div class="quantity-section">
                  <label for="quantity">Quantity:</label>
                  <input type="number" id="quantity" value="1" min="1" max="10" class="quantity-input">
                </div>

                <div class="action-buttons">
                  <button class="btn btn-primary btn-large" onclick="ProductPage.addToCart()">
                    Add to Cart
                  </button>
                  <button class="btn btn-secondary btn-large" onclick="ProductPage.buyNow()">
                    Buy Now
                  </button>
                </div>
              </div>

              <div class="product-info-tabs">
                <div class="tab-content">
                  <h3>Product Information</h3>
                  <p><strong>Stock Status:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                  <p><strong>Customer Rating:</strong> ${product.rating}/5 based on ${product.reviews} reviews</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Related Products -->
          <div class="related-products">
            <h2 class="section-title">You May Also Like</h2>
            <div id="related-products-grid">
              ${this.renderRelatedProducts()}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Render related products
  renderRelatedProducts: function() {
    if (!this.currentProduct) return '';

    const relatedProducts = DataService.getProductsByCategory(this.currentProduct.category)
      .filter(p => p.id !== this.currentProduct.id)
      .slice(0, 4);

    return ProductCardComponent.createGrid(relatedProducts);
  },

  // Add product to cart
  addToCart: function() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    if (quantity < 1) {
      Utils.showMessage('Please select a valid quantity', 'error');
      return;
    }

    if (CartService.addToCart(this.currentProduct.id, quantity)) {
      // Visual feedback
      const button = event.target;
      const originalText = button.textContent;

      button.textContent = 'Added to Cart!';
      button.style.backgroundColor = 'var(--success-green)';

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 2000);
    }
  },

  // Buy now
  buyNow: function() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    if (CartService.addToCart(this.currentProduct.id, quantity)) {
      setTimeout(() => {
        Router.navigateTo('cart');
      }, 500);
    }
  },

  // Bind event listeners
  bindEvents: function() {
    // Quantity input validation
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
      quantityInput.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
        if (this.value > 10) this.value = 10;
      });
    }
  }
};