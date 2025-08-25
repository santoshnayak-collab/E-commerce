/* ==========================================================================
   CART PAGE COMPONENT
   ========================================================================== */

const CartPage = {
  // Initialize cart page
  init: function() {
    this.render();
    this.bindEvents();
  },

  // Render cart page content
  render: function() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    mainContent.innerHTML = `
      <div class="page active" id="cart-page">
        <div class="container">
          <h1 class="section-title">Shopping Cart</h1>
          <div id="cart-content">
            ${this.renderCartContent()}
          </div>
        </div>
      </div>
    `;
  },

  // Render cart content
  renderCartContent: function() {
    const cartItems = CartService.getCartItemsWithDetails();

    if (cartItems.length === 0) {
      return `
        <div class="empty-state">
          <h3>Your cart is empty</h3>
          <p>Start shopping to add items to your cart.</p>
          <button class="btn btn-primary" onclick="Router.navigateTo('shop')">Browse Products</button>
        </div>
      `;
    }

    const subtotal = CartService.getSubtotal();
    const shipping = CartService.getShippingCost();
    const total = CartService.getTotal();

    const cartItemsHtml = cartItems.map(item => `
      <div class="cart-item">
        <div class="cart-item-image" style="background-image: url('${item.product.image}')"></div>
        <div class="cart-item-info">
          <h3>${Utils.sanitizeHtml(item.product.name)}</h3>
          <p>${Utils.sanitizeHtml(item.product.description)}</p>
          <p>Price: ${Utils.formatPrice(item.product.price)}</p>
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="CartPage.updateQuantity(${item.productId}, -1)">-</button>
          <span style="margin: 0 15px; font-weight: bold;">${item.quantity}</span>
          <button class="quantity-btn" onclick="CartPage.updateQuantity(${item.productId}, 1)">+</button>
        </div>
        <div class="cart-item-price">
          <strong>${Utils.formatPrice(item.itemTotal)}</strong>
        </div>
        <button class="btn btn-secondary" onclick="CartPage.removeItem(${item.productId})">Remove</button>
      </div>
    `).join('');

    return `
      <div class="cart-items">
        ${cartItemsHtml}
      </div>

      <div class="cart-summary">
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>${Utils.formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
          <span>Shipping:</span>
          <span>${shipping === 0 ? 'FREE' : Utils.formatPrice(shipping)}</span>
        </div>
        <div class="summary-row total">
          <span>Total:</span>
          <span>${Utils.formatPrice(total)}</span>
        </div>
        <button class="btn btn-primary btn-large" onclick="CartPage.checkout()" style="width: 100%; margin-top: 20px;">
          Proceed to Checkout
        </button>
      </div>
    `;
  },

  // Update item quantity
  updateQuantity: function(productId, change) {
    if (CartService.updateQuantity(productId, change)) {
      this.updateCartDisplay();
    }
  },

  // Remove item from cart
  removeItem: function(productId) {
    if (CartService.removeFromCart(productId)) {
      this.updateCartDisplay();
    }
  },

  // Update cart display
  updateCartDisplay: function() {
    const cartContent = document.getElementById('cart-content');
    if (cartContent) {
      cartContent.innerHTML = this.renderCartContent();
    }
  },

  // Proceed to checkout
  checkout: function() {
    const cartItems = CartService.getCartItems();
    if (cartItems.length === 0) {
      Utils.showMessage('Your cart is empty!', 'error');
      return;
    }

    // Simulate checkout process
    Utils.showMessage('Redirecting to checkout...', 'success');

    setTimeout(() => {
      const confirmed = confirm('Complete your order? This is a demo, so no actual payment will be processed.');
      if (confirmed) {
        CartService.clearCart();
        Utils.showMessage('Order placed successfully! Thank you for your purchase.', 'success');
        Router.navigateTo('home');
      }
    }, 1000);
  },

  // Bind event listeners
  bindEvents: function() {
    // Additional event listeners can be added here if needed
  }
};