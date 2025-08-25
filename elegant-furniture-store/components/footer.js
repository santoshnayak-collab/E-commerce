/* ==========================================================================
   FOOTER COMPONENT - Site Footer
   ========================================================================== */

const FooterComponent = {
  // Initialize footer component
  init: function() {
    this.render();
  },

  // Render footer HTML
  render: function() {
    const footerContainer = document.getElementById('footer-component');
    if (!footerContainer) return;

    const companyInfo = DataService.getCompanyInfo();

    footerContainer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>${companyInfo.name}</h3>
              <p>${companyInfo.tagline}</p>
              <p>${companyInfo.description}</p>
            </div>

            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li onclick="Router.navigateTo('home')">Home</li>
                <li onclick="Router.navigateTo('shop')">Shop</li>
                <li onclick="Router.navigateTo('about')">About</li>
                <li onclick="Router.navigateTo('contact')">Contact</li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Categories</h4>
              <ul>
                ${DataService.getCategories().map(category => 
                  `<li onclick="Router.navigateTo('shop', {category: '${category.id}'})">${category.name}</li>`
                ).join('')}
              </ul>
            </div>

            <div class="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📍 ${companyInfo.address}</li>
                <li>📞 ${companyInfo.phone}</li>
                <li>✉️ ${companyInfo.email}</li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2025 ${companyInfo.name}. All rights reserved. | Crafted with ❤️</p>
          </div>
        </div>
      </footer>
    `;
  }
};