# Elegant Furnishings - Professional Furniture Ecommerce

A modern, responsive furniture ecommerce website built with vanilla JavaScript and modular architecture.

## 🏗️ Project Structure

```
elegant-furniture-store/
├── index.html                 # Main entry point
├── app.js                     # Main application controller
├── assets/
│   └── css/
│       ├── main.css          # Core styles and variables
│       └── components.css    # Component-specific styles
├── components/
│   ├── header.js             # Navigation component
│   ├── footer.js             # Footer component
│   └── product-card.js       # Reusable product card
├── pages/
│   ├── home.js              # Home page component
│   ├── shop.js              # Shop page component
│   ├── cart.js              # Shopping cart page
│   └── product.js           # Product detail page
├── services/
│   ├── data-service.js      # Data management
│   └── cart-service.js      # Shopping cart logic
├── utils/
│   └── helpers.js           # Utility functions
└── README.md
```

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns with components, pages, and services
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Working Shopping Cart**: Add items, update quantities, persistent storage
- **Product Catalog**: Browse by category, search, and sort functionality
- **Professional UI**: Elegant design with smooth animations and transitions
- **Real Furniture Images**: High-quality product photography throughout

## 🛠️ Technologies Used

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Architecture**: Component-based with service layer
- **Styling**: CSS Custom Properties (Variables), Flexbox, CSS Grid
- **Storage**: Local Storage for cart persistence

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Design System

### Color Palette
- **Primary Background**: #FEFCF8 (Warm Cream)
- **Secondary Background**: #F9F7F4 (Light Cream)
- **Card Background**: #FFFFFF (Pure White)
- **Primary Text**: #2C2C2C (Charcoal)
- **Secondary Text**: #6B6B6B (Gray)
- **Primary Button**: #8B7355 (Warm Brown)
- **Accent**: #C8B478 (Golden Beige)

### Typography
- **Primary Font**: Segoe UI, system-ui, sans-serif
- **Accent Font**: Georgia, serif (for headings)

## 🏃‍♂️ Getting Started

1. **Extract** the ZIP file to your desired location
2. **Open** `index.html` in a modern web browser
3. **Browse** the furniture catalog and test the cart functionality

## 📄 File Descriptions

### Core Files
- `index.html` - Main HTML structure with component containers
- `app.js` - Application initialization, routing, and main controller

### Components
- `components/header.js` - Navigation bar with search and cart
- `components/footer.js` - Site footer with links and company info
- `components/product-card.js` - Reusable product display component

### Pages
- `pages/home.js` - Homepage with hero section, categories, and featured products
- `pages/shop.js` - Product listing with filters and sorting
- `pages/cart.js` - Shopping cart management and checkout
- `pages/product.js` - Individual product details page

### Services
- `services/data-service.js` - Product and category data management
- `services/cart-service.js` - Shopping cart operations and persistence

### Utilities
- `utils/helpers.js` - Common utility functions (formatting, validation, etc.)

### Styles
- `assets/css/main.css` - Core styles, variables, and layout
- `assets/css/components.css` - Component-specific styling

## 🔧 Customization

### Adding New Products
Edit the `appData.products` array in `services/data-service.js`:

```javascript
{
  "id": 9,
  "name": "New Product",
  "category": "living-room",
  "price": 999.99,
  "description": "Product description",
  "image": "image-url.jpg",
  "rating": 4.5,
  "reviews": 50
}
```

### Adding New Categories
Edit the `appData.categories` array in `services/data-service.js`:

```javascript
{
  "id": "new-category",
  "name": "New Category",
  "slug": "new-category",
  "description": "Category description",
  "image": "category-image.jpg"
}
```

### Styling Customization
Modify CSS custom properties in `assets/css/main.css`:

```css
:root {
  --primary-bg: #FEFCF8;
  --button-primary: #8B7355;
  /* Add your custom colors */
}
```

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Efficient Rendering**: Virtual DOM-like updates
- **Optimized Storage**: Minimal localStorage usage
- **Fast Navigation**: Client-side routing

## 🌟 Key Features

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent storage
- Price calculations
- Checkout process

### Product Catalog
- Category browsing
- Search functionality
- Sorting options
- Product details
- Related products

### User Experience
- Smooth animations
- Loading states
- Success/error messages
- Responsive design
- Intuitive navigation

## 📧 Contact

For questions or customizations, contact the development team.

## 📄 License

This project is created for educational and portfolio purposes.
