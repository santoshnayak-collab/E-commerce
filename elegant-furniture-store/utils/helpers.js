/* ==========================================================================
   UTILITY HELPERS - Common Functions
   ========================================================================== */

const Utils = {
  // Format price to currency
  formatPrice: function(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  },

  // Generate star rating display
  generateStars: function(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    return '★'.repeat(fullStars) + (halfStar ? '☆' : '') + '☆'.repeat(emptyStars);
  },

  // Show loading spinner
  showLoading: function() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.classList.add('active');
    }
  },

  // Hide loading spinner
  hideLoading: function() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.classList.remove('active');
    }
  },

  // Show message to user
  showMessage: function(message, type = 'success') {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    document.body.appendChild(messageEl);

    setTimeout(() => {
      messageEl.remove();
    }, 3000);
  },

  // Debounce function for search
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Sanitize HTML to prevent XSS
  sanitizeHtml: function(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  },

  // Smooth scroll to element
  scrollTo: function(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },

  // Get query parameters
  getQueryParam: function(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },

  // Format date
  formatDate: function(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Validate email
  validateEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Generate unique ID
  generateId: function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
};