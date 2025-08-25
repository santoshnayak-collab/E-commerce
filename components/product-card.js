/* ==========================================================================
   PRODUCT CARD COMPONENT - Reusable Product Display
   ========================================================================== */

const ProductCardComponent = {
  // Create a single product card
  create: function(product) {
    const originalPriceHtml = product.originalPrice ? 
      `<span class="product-original-price">${Utils.formatPrice(product.originalPrice)}</span>` : '';

    const saleLabel = product.originalPrice ? 
      `<div class="sale-label">SALE</div>` : '';

    return `
      <div class="product-card" onclick="Router.navigateTo('product', {id: ${product.id}})">
        ${saleLabel}
        <div class="product-image" style="background-image: url('${product.image}')"></div>
        <div class="product-info">
          <h3 class="product-name">${Utils.sanitizeHtml(product.name)}</h3>
          <div class="product-price">
            ${Utils.formatPrice(product.price)}
            ${originalPriceHtml}
          </div>
          <div class="product-rating">
            <span class="stars">${Utils.generateStars(product.rating)}</span>
            <span>(${product.reviews} reviews)</span>
          </div>
          <p class="product-description">${Utils.sanitizeHtml(product.description)}</p>
          <div class="product-buttons">
            <button class="btn btn-primary" onclick="event.stopPropagation(); ProductCardComponent.addToCart(${product.id})">
              Add to Cart
            </button>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); ProductCardComponent.buyNow(${product.id})">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // Create multiple product cards
  createGrid: function(products) {
    if (!products || products.length === 0) {
      return `
        <div class="empty-state">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria.</p>
          <button class="btn btn-primary" onclick="Router.navigateTo('shop')">Browse All Products</button>
        </div>
      `;
    }

    return `
      <div class="products-grid">
        ${products.map(product => this.create(product)).join('')}
      </div>
    `;
  },

  // Add product to cart
  addToCart: function(productId) {
    if (CartService.addToCart(productId, 1)) {
      // Add visual feedback
      const button = event.target;
      const originalText = button.textContent;

      button.textContent = 'Added!';
      button.style.backgroundColor = 'var(--success-green)';

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 1000);
    }
  },

  // Buy now (add to cart and go to cart)
  buyNow: function(productId) {
    if (CartService.addToCart(productId, 1)) {
      setTimeout(() => {
        Router.navigateTo('cart');
      }, 500);
    }
  },

  // Create category card
  createCategoryCard: function(category) {
    return `
      <div class="category-card" onclick="Router.navigateTo('shop', {category: '${category.id}'})">
        <div class="category-image" style="background-image: url('${category.image}')"></div>
        <div class="category-info">
          <h3 class="category-name">${Utils.sanitizeHtml(category.name)}</h3>
          <p class="category-description">${Utils.sanitizeHtml(category.description)}</p>
          <small>${category.productCount} products</small>
        </div>
      </div>
    `;
  },

  // Create categories grid
  createCategoriesGrid: function(categories) {
    return `
      <div class="categories-grid">
        ${categories.map(category => this.createCategoryCard(category)).join('')}
      </div>
    `;
  }
};