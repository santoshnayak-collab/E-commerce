/* ==========================================================================
   SHOP PAGE COMPONENT
   ========================================================================== */

const ShopPage = {
  currentFilters: {
    category: '',
    search: '',
    sortBy: 'name'
  },

  // Initialize shop page
  init: function(params = {}) {
    // Update filters from parameters
    this.currentFilters = {
      category: params.category || '',
      search: params.search || '',
      sortBy: params.sortBy || 'name'
    };

    this.render();
    this.bindEvents();
  },

  // Render shop page content
  render: function() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const categories = DataService.getCategories();

    mainContent.innerHTML = `
      <div class="page active" id="shop-page">
        <div class="container">
          <div class="shop-header">
            <h1 class="section-title">Shop All Furniture</h1>

            <div class="shop-controls">
              <div class="filters">
                <select id="categoryFilter" class="filter-select">
                  <option value="">All Categories</option>
                  ${categories.map(cat => 
                    `<option value="${cat.id}" ${this.currentFilters.category === cat.id ? 'selected' : ''}>${cat.name}</option>`
                  ).join('')}
                </select>

                <select id="sortSelect" class="filter-select">
                  <option value="name" ${this.currentFilters.sortBy === 'name' ? 'selected' : ''}>Sort by Name</option>
                  <option value="price-low" ${this.currentFilters.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                  <option value="price-high" ${this.currentFilters.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                  <option value="rating" ${this.currentFilters.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div id="shop-products">
            ${this.renderProducts()}
          </div>
        </div>
      </div>
    `;
  },

  // Render products based on current filters
  renderProducts: function() {
    let products = DataService.getProducts();

    // Apply category filter
    if (this.currentFilters.category) {
      products = DataService.getProductsByCategory(this.currentFilters.category);
    }

    // Apply search filter
    if (this.currentFilters.search) {
      products = DataService.searchProducts(this.currentFilters.search);
    }

    // Apply sorting
    products = DataService.sortProducts(products, this.currentFilters.sortBy);

    return ProductCardComponent.createGrid(products);
  },

  // Update products display
  updateProducts: function() {
    const productsContainer = document.getElementById('shop-products');
    if (productsContainer) {
      productsContainer.innerHTML = this.renderProducts();
    }
  },

  // Bind event listeners
  bindEvents: function() {
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        this.currentFilters.category = e.target.value;
        this.updateProducts();
      });
    }

    // Sort filter
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentFilters.sortBy = e.target.value;
        this.updateProducts();
      });
    }
  }
};