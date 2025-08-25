/* ==========================================================================
   HOME PAGE COMPONENT
   ========================================================================== */

const HomePage = {
  // Initialize home page
  init: function() {
    this.render();
  },

  // Render home page content
  render: function() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const categories = DataService.getCategories();
    const featuredProducts = DataService.getProducts().slice(0, 8); // First 8 products as featured

    mainContent.innerHTML = `
      <div class="page active" id="home-page">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-image"></div>
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <h1 class="hero-title">Crafting Timeless Spaces</h1>
            <p class="hero-subtitle">Discover furniture that combines exceptional craftsmanship with timeless design</p>
            <button class="hero-cta" onclick="Router.navigateTo('shop')">Shop Collection</button>
          </div>
        </section>

        <div class="container">
          <!-- Categories Section -->
          <section class="categories-section">
            <h2 class="section-title">Shop by Category</h2>
            ${ProductCardComponent.createCategoriesGrid(categories)}
          </section>

          <!-- Featured Products Section -->
          <section class="featured-section">
            <h2 class="section-title">Featured Products</h2>
            ${ProductCardComponent.createGrid(featuredProducts)}
          </section>

          <!-- Values Section -->
          <section class="values-section">
            <h2 class="section-title">Why Choose Elegant Furnishings</h2>
            <div class="values-grid">
              <div class="value-item">
                <div class="value-icon">🛠️</div>
                <h3>Quality Craftsmanship</h3>
                <p>Each piece is carefully crafted with attention to detail and built to last for generations.</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🌱</div>
                <h3>Sustainable Materials</h3>
                <p>We source responsibly and use eco-friendly materials wherever possible to protect our planet.</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🎨</div>
                <h3>Timeless Design</h3>
                <p>Our furniture transcends trends with classic, enduring style that never goes out of fashion.</p>
              </div>
              <div class="value-item">
                <div class="value-icon">😊</div>
                <h3>Customer Satisfaction</h3>
                <p>Your happiness with our products is our top priority, backed by excellent customer service.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
};