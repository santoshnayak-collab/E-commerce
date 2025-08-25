/* ==========================================================================
   MAIN APPLICATION CONTROLLER
   Professional Furniture Ecommerce Application
   ========================================================================== */

"use strict";

/* ==========================================================================
   ROUTER - Navigation System
   ========================================================================== */

const Router = {
  currentPage: 'home',

  // Initialize router
  init: function() {
    this.handleInitialRoute();
    this.bindEvents();
  },

  // Handle initial route on page load
  handleInitialRoute: function() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const [page, params] = this.parseRoute(hash);
      this.navigateTo(page, params);
    } else {
      this.navigateTo('home');
    }
  },

  // Parse route from hash
  parseRoute: function(hash) {
    const parts = hash.split('/');
    const page = parts[0] || 'home';
    const params = {};

    // Parse parameters for different pages
    if (page === 'product' && parts[1]) {
      params.id = parseInt(parts[1]);
    } else if (page === 'category' && parts[1]) {
      params.category = parts[1];
    }

    return [page, params];
  },

  // Navigate to a specific page
  navigateTo: function(page, params = {}) {
    console.log(`Navigating to: ${page}`, params);

    Utils.showLoading();

    setTimeout(() => {
      this.currentPage = page;

      // Update URL hash
      let hash = page;
      if (params.id) {
        hash += `/${params.id}`;
      } else if (params.category) {
        hash += `/${params.category}`;
      }
      window.location.hash = hash;

      // Render appropriate page
      this.renderPage(page, params);

      // Update header active link
      HeaderComponent.updateActiveLink(page);

      Utils.hideLoading();
      Utils.scrollTo(document.getElementById('main-content'));
    }, 300);
  },

  // Render the appropriate page
  renderPage: function(page, params = {}) {
    switch (page) {
      case 'home':
        HomePage.init(params);
        break;
      case 'shop':
        ShopPage.init(params);
        break;
      case 'product':
        ProductPage.init(params);
        break;
      case 'cart':
        CartPage.init(params);
        break;
      case 'about':
        this.renderAboutPage();
        break;
      case 'contact':
        this.renderContactPage();
        break;
      default:
        console.warn(`Unknown page: ${page}`);
        this.navigateTo('home');
    }
  },

  // Render about page
  renderAboutPage: function() {
    const mainContent = document.getElementById('main-content');
    const companyInfo = DataService.getCompanyInfo();

    mainContent.innerHTML = `
      <div class="page active" id="about-page">
        <div class="container">
          <h1 class="section-title">About ${companyInfo.name}</h1>

          <div class="about-content">
            <div class="about-hero">
              <div class="about-image" style="background-image: url('https://pplx-res.cloudinary.com/image/upload/v1755343200/pplx_project_search_images/6593bb7da6605d829effb33f88aefac8edadc926.png'); height: 400px; background-size: cover; background-position: center; border-radius: 12px; margin-bottom: 2rem;"></div>
            </div>

            <div class="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2010, ${companyInfo.name} began as a family business committed to creating beautiful, functional furniture that stands the test of time. We believe every home deserves pieces that combine exceptional craftsmanship with timeless design.</p>

              <p>We work directly with skilled artisans and responsibly source materials to create furniture that not only looks beautiful but also tells a story of quality and sustainability.</p>

              <h2>Our Values</h2>
              <div class="values-grid">
                <div class="value-item">
                  <h3>🛠️ Quality Craftsmanship</h3>
                  <p>Every piece is meticulously crafted with attention to detail, using traditional techniques combined with modern precision.</p>
                </div>
                <div class="value-item">
                  <h3>🌱 Sustainable Materials</h3>
                  <p>We prioritize eco-friendly materials and responsible sourcing practices to minimize our environmental impact.</p>
                </div>
                <div class="value-item">
                  <h3>🎨 Timeless Design</h3>
                  <p>Our designs transcend fleeting trends, creating pieces that remain beautiful and relevant for generations.</p>
                </div>
                <div class="value-item">
                  <h3>😊 Customer Satisfaction</h3>
                  <p>Your happiness with our products is our ultimate measure of success, backed by comprehensive warranties and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Render contact page
  renderContactPage: function() {
    const mainContent = document.getElementById('main-content');
    const companyInfo = DataService.getCompanyInfo();

    mainContent.innerHTML = `
      <div class="page active" id="contact-page">
        <div class="container">
          <h1 class="section-title">Contact Us</h1>

          <div class="contact-content">
            <div class="contact-form-section">
              <h2>Get in Touch</h2>
              <form class="contact-form" id="contactForm">
                <div class="form-group">
                  <input type="text" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <input type="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Subject" required>
                </div>
                <div class="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div class="contact-info">
              <h2>Visit Our Showroom</h2>
              <div class="info-items">
                <div class="info-item">
                  <h3>📍 Address</h3>
                  <p>${companyInfo.address}</p>
                </div>
                <div class="info-item">
                  <h3>📞 Phone</h3>
                  <p>${companyInfo.phone}</p>
                </div>
                <div class="info-item">
                  <h3>✉️ Email</h3>
                  <p>${companyInfo.email}</p>
                </div>
                <div class="info-item">
                  <h3>🕒 Hours</h3>
                  <p>Mon-Fri: 10:00 AM - 7:00 PM<br>
                     Saturday: 10:00 AM - 8:00 PM<br>
                     Sunday: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind contact form event
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        Utils.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        this.reset();
      });
    }
  },

  // Bind router events
  bindEvents: function() {
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const [page, params] = this.parseRoute(hash);
        this.renderPage(page, params);
        HeaderComponent.updateActiveLink(page);
      }
    });
  }
};

/* ==========================================================================
   APPLICATION INITIALIZATION
   ========================================================================== */

const App = {
  // Initialize the entire application
  init: function() {
    console.log('Initializing Elegant Furnishings Application...');

    try {
      // Initialize services
      CartService.init();

      // Initialize components
      HeaderComponent.init();
      FooterComponent.init();

      // Initialize router
      Router.init();

      console.log('Application initialized successfully!');

    } catch (error) {
      console.error('Error initializing application:', error);
      Utils.showMessage('Application failed to load. Please refresh the page.', 'error');
    }
  }
};

/* ==========================================================================
   DOCUMENT READY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Starting Application');
  App.init();
});

/* ==========================================================================
   GLOBAL ERROR HANDLING
   ========================================================================== */

window.addEventListener('error', function(event) {
  console.error('Global error:', event.error);
  Utils.showMessage('An unexpected error occurred. Please try again.', 'error');
});

// Expose necessary functions globally for onclick handlers
window.Router = Router;
window.CartService = CartService;
window.ProductCardComponent = ProductCardComponent;
window.CartPage = CartPage;
window.ProductPage = ProductPage;

console.log('🛋️ Elegant Furnishings Application Loaded Successfully!');