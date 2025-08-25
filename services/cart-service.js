/* ==========================================================================
   CART SERVICE - Shopping Cart Management
   ========================================================================== */

const CartService = {
  cart: [],

  // Initialize cart from localStorage
  init: function() {
    this.loadCart();
    this.updateCartCount();
  },

  // Load cart from localStorage
  loadCart: function() {
    try {
      const saved = localStorage.getItem('elegant-furniture-cart');
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      this.cart = [];
    }
  },

  // Save cart to localStorage
  saveCart: function() {
    try {
      localStorage.setItem('elegant-furniture-cart', JSON.stringify(this.cart));
      this.updateCartCount();
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  },

  // Update cart count display
  updateCartCount: function() {
    const count = this.getTotalItems();
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
      cartCountEl.textContent = count;

      // Add animation effect
      cartCountEl.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartCountEl.style.transform = 'scale(1)';
      }, 200);
    }
  },

  // Add item to cart
  addToCart: function(productId, quantity = 1) {
    const product = DataService.getProductById(productId);
    if (!product) {
      Utils.showMessage('Product not found!', 'error');
      return false;
    }

    const existingItem = this.cart.find(item => item.productId === parseInt(productId));

    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      this.cart.push({
        productId: parseInt(productId),
        quantity: parseInt(quantity),
        addedAt: new Date().toISOString()
      });
    }

    this.saveCart();
    Utils.showMessage(`Added ${product.name} to cart!`, 'success');
    return true;
  },

  // Remove item from cart
  removeFromCart: function(productId) {
    const initialLength = this.cart.length;
    this.cart = this.cart.filter(item => item.productId !== parseInt(productId));

    if (this.cart.length < initialLength) {
      this.saveCart();
      Utils.showMessage('Item removed from cart', 'success');
      return true;
    }
    return false;
  },

  // Update item quantity
  updateQuantity: function(productId, change) {
    const item = this.cart.find(item => item.productId === parseInt(productId));
    if (item) {
      const newQuantity = item.quantity + change;

      if (newQuantity <= 0) {
        return this.removeFromCart(productId);
      } else {
        item.quantity = newQuantity;
        this.saveCart();
        return true;
      }
    }
    return false;
  },

  // Set specific quantity
  setQuantity: function(productId, quantity) {
    const item = this.cart.find(item => item.productId === parseInt(productId));
    if (item && quantity > 0) {
      item.quantity = parseInt(quantity);
      this.saveCart();
      return true;
    }
    return false;
  },

  // Get all cart items
  getCartItems: function() {
    return this.cart;
  },

  // Get cart items with product details
  getCartItemsWithDetails: function() {
    return this.cart.map(item => {
      const product = DataService.getProductById(item.productId);
      return {
        ...item,
        product: product,
        itemTotal: product ? product.price * item.quantity : 0
      };
    }).filter(item => item.product); // Remove items with missing products
  },

  // Get total number of items
  getTotalItems: function() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Get subtotal
  getSubtotal: function() {
    return this.cart.reduce((total, item) => {
      const product = DataService.getProductById(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  },

  // Get shipping cost
  getShippingCost: function() {
    const subtotal = this.getSubtotal();
    const shippingInfo = DataService.getShippingInfo();
    return subtotal >= shippingInfo.freeThreshold ? 0 : shippingInfo.standardRate;
  },

  // Get total cost
  getTotal: function() {
    return this.getSubtotal() + this.getShippingCost();
  },

  // Clear entire cart
  clearCart: function() {
    this.cart = [];
    this.saveCart();
    Utils.showMessage('Cart cleared', 'success');
  },

  // Check if product is in cart
  isInCart: function(productId) {
    return this.cart.some(item => item.productId === parseInt(productId));
  },

  // Get quantity of specific product in cart
  getProductQuantity: function(productId) {
    const item = this.cart.find(item => item.productId === parseInt(productId));
    return item ? item.quantity : 0;
  }
};