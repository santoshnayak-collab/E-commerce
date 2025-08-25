/* ==========================================================================
   HEADER COMPONENT - Navigation & Search
   ========================================================================== */

const HeaderComponent = {
  searchVisible: false,

  // Initialize header component
  init: function() {
    this.render();
    this.bindEvents();
  },

  // Render header HTML
  render: function() {
    const headerContainer = document.getElementById('header-component');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
      <header class="header">
        <nav class="navbar">
          <div class="nav-brand">
            <a href="#home" class="brand-link" onclick="Router.navigateTo('home')">Elegant Furnishings</a>
          </div>

          <div class="nav-menu">
            <a href="#home" class="nav-link" onclick="Router.navigateTo('home')">Home</a>
            <a href="#shop" class="nav-link" onclick="Router.navigateTo('shop')">Shop</a>
            <a href="#about" class="nav-link" onclick="Router.navigateTo('about')">About</a>
            <a href="#contact" class="nav-link" onclick="Router.navigateTo('contact')">Contact</a>
          </div>

          <div class="nav-actions">
            <button class="search-toggle" id="searchToggle">
              <i class="fa fa-search"></i> <!-- Search Icon -->
            </button>
            <button class="cart-toggle" id="cartToggle">
              🛒 <span class="cart-count" id="cartCount">0</span>
            </button>
          </div>
        </nav>

        <div class="search-bar hidden" id="searchBar">
          <div class="search-container">
            <input type="text" placeholder="Search furniture..." id="searchInput" class="search-input">
            <button class="search-btn" id="searchBtn">Search</button>
          </div>
        </div>
      </header>
    `;

    // Update cart count
    CartService.updateCartCount();
  },

  // Bind event listeners
  bindEvents: function() {
    // Search toggle
    const searchToggle = document.getElementById('searchToggle');
    if (searchToggle) {
      searchToggle.addEventListener('click', () => this.toggleSearch());
    }

    // Cart button
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) {
      cartToggle.addEventListener('click', () => Router.navigateTo('cart'));
    }

    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => this.performSearch());
    }

    // Search input enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performSearch();
        }
      });
    }
  },

  // Toggle search bar visibility
  toggleSearch: function() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
      this.searchVisible = !this.searchVisible;

      if (this.searchVisible) {
        searchBar.classList.remove('hidden');
        document.getElementById('searchInput').focus();
      } else {
        searchBar.classList.add('hidden');
      }
    }
  },

  // Perform search
  performSearch: function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
      const query = searchInput.value.trim();
      Router.navigateTo('shop', { search: query });
      this.toggleSearch(); // Hide search bar after search
    }
  },

  // Update active nav link
  updateActiveLink: function(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('onclick').includes(currentPage)) {
        link.classList.add('active');
      }
    });
  }
};