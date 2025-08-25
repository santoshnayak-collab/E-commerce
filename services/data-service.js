/* ==========================================================================
   DATA SERVICE - Centralized Data Management
   ========================================================================== */

const DataService = {
  // Application data with all furniture images
  appData: {
    "categories": [
      {
        "id": "living-room",
        "name": "Living Room",
        "slug": "living-room",
        "description": "Create welcoming spaces with comfortable seating",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/7e0276927bd04842eb6ddfe06140a10ee37373cd.png",
        "heroImage": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/20ae170e9485641cf4882b813943145a260ee1ca.png",
        "productCount": 4
      },
      {
        "id": "bedroom",
        "name": "Bedroom",
        "slug": "bedroom",
        "description": "Transform bedrooms into peaceful sanctuaries",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1755343200/pplx_project_search_images/6593bb7da6605d829effb33f88aefac8edadc926.png",
        "heroImage": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/ff308d0806a9b3661cd88dc749f7575bec844b51.png",
        "productCount": 3
      },
      {
        "id": "dining-room",
        "name": "Dining Room",
        "slug": "dining-room",
        "description": "Beautiful tables for memorable meals",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/d93c815009f0bba6ae04ab298acd36d468e7999c.png",
        "heroImage": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/2c820990534895f4a24df3ac890e26546ea03655.png",
        "productCount": 3
      },
      {
        "id": "office",
        "name": "Office",
        "slug": "office",
        "description": "Productive workspaces with ergonomic furniture",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041863/pplx_project_search_images/5b25497dda489bbb6e80d2aa819d62fab2b48c00.png",
        "heroImage": "https://pplx-res.cloudinary.com/image/upload/v1756041863/pplx_project_search_images/b4c7395ebd04ee705352ac96ce2d1778af7f7e36.png",
        "productCount": 3
      }
    ],
    "products": [
      {
        "id": 1,
        "name": "Milano Sectional Sofa",
        "slug": "milano-sectional-sofa",
        "category": "living-room",
        "price": 2299.99,
        "originalPrice": 2799.99,
        "description": "Luxurious sectional sofa with deep seating and plush cushions. Features durable hardwood frame and premium fabric upholstery.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/20ae170e9485641cf4882b813943145a260ee1ca.png",
        "rating": 4.8,
        "reviews": 124,
        "features": ["Deep seating comfort", "Solid hardwood frame", "Premium linen upholstery", "Removable cushion covers"],
        "inStock": true
      },
      {
        "id": 2,
        "name": "Heritage Oak Dining Table",
        "slug": "heritage-oak-dining-table",
        "category": "dining-room",
        "price": 1899.99,
        "description": "Handcrafted solid oak dining table with natural grain patterns. Seats 6-8 people comfortably.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/d93c815009f0bba6ae04ab298acd36d468e7999c.png",
        "rating": 4.9,
        "reviews": 89,
        "features": ["100% solid oak", "Natural grain patterns", "Seats 8 people", "Hand-applied oil finish"],
        "inStock": true
      },
      {
        "id": 3,
        "name": "Zen Platform Bed",
        "slug": "zen-platform-bed",
        "category": "bedroom",
        "price": 1299.99,
        "description": "Minimalist platform bed crafted from solid walnut with clean lines and low profile design.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1755343200/pplx_project_search_images/6593bb7da6605d829effb33f88aefac8edadc926.png",
        "rating": 4.7,
        "reviews": 156,
        "features": ["Solid walnut construction", "Low profile design", "Integrated slat system", "No box spring required"],
        "inStock": true
      },
      {
        "id": 4,
        "name": "Executive Leather Chair",
        "slug": "executive-leather-chair",
        "category": "office",
        "price": 899.99,
        "description": "Premium executive chair with genuine top-grain leather and ergonomic design for all-day comfort.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041863/pplx_project_search_images/5b25497dda489bbb6e80d2aa819d62fab2b48c00.png",
        "rating": 4.6,
        "reviews": 203,
        "features": ["Top-grain leather", "Memory foam cushioning", "Adjustable lumbar support", "Height adjustment"],
        "inStock": true
      },
      {
        "id": 5,
        "name": "Glass Coffee Table",
        "slug": "glass-coffee-table",
        "category": "living-room",
        "price": 599.99,
        "description": "Modern coffee table with tempered glass top and sculptural steel base.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/7e0276927bd04842eb6ddfe06140a10ee37373cd.png",
        "rating": 4.5,
        "reviews": 92,
        "features": ["12mm tempered glass", "Brushed steel base", "Modern design", "Easy to clean"],
        "inStock": true
      },
      {
        "id": 8,
        "name": "Velvet Accent Chair",
        "slug": "velvet-accent-chair",
        "category": "living-room",
        "price": 799.99,
        "description": "Luxurious reading chair with performance velvet upholstery and memory foam cushioning.",
        "image": "https://pplx-res.cloudinary.com/image/upload/v1756041845/pplx_project_search_images/7e0276927bd04842eb6ddfe06140a10ee37373cd.png",
        "rating": 4.6,
        "reviews": 201,
        "features": ["Performance velvet", "Memory foam", "360° swivel", "Stain-resistant"],
        "inStock": true
      }
    ],
    "companyInfo": {
      "name": "Elegant Furnishings",
      "tagline": "Crafting Timeless Spaces",
      "description": "We believe every home deserves furniture that combines exceptional craftsmanship with timeless design.",
      "email": "hello@elegantfurnishings.com",
      "phone": "(555) 123-4567",
      "address": "123 Design Avenue, Furniture District, NY 10001"
    },
    "shipping": {
      "freeThreshold": 999,
      "standardRate": 99
    }
  },

  // Get all categories
  getCategories: function() {
    return this.appData.categories;
  },

  // Get category by slug
  getCategoryBySlug: function(slug) {
    return this.appData.categories.find(category => category.slug === slug);
  },

  // Get all products
  getProducts: function() {
    return this.appData.products;
  },

  // Get product by ID
  getProductById: function(id) {
    return this.appData.products.find(product => product.id === parseInt(id));
  },

  // Get products by category
  getProductsByCategory: function(categoryId) {
    return this.appData.products.filter(product => product.category === categoryId);
  },

  // Search products
  searchProducts: function(query) {
    const searchTerm = query.toLowerCase();
    return this.appData.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  },

  // Sort products
  sortProducts: function(products, sortBy) {
    const productsCopy = [...products];

    switch (sortBy) {
      case 'price-low':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-high':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'rating':
        return productsCopy.sort((a, b) => b.rating - a.rating);
      case 'name':
      default:
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
  },

  // Get company info
  getCompanyInfo: function() {
    return this.appData.companyInfo;
  },

  // Get shipping info
  getShippingInfo: function() {
    return this.appData.shipping;
  }
};