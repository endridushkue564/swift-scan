/* 
Filename: sophisticated_code.js
Description: This code demonstrates a sophisticated and complex JavaScript program that simulates a virtual marketplace. 

Note: This code is purely fictional and not tested. It is meant to showcase complexity and creativity. 

Author: AI Developer
Date: 2022/06/10
*/

// Marketplace Class
class Marketplace {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.customers = [];
    this.orders = [];
  }

  // Add product to marketplace
  addProduct(product) {
    this.products.push(product);
  }

  // Remove product from marketplace
  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  // Register a new customer
  registerCustomer(customer) {
    this.customers.push(customer);
  }

  // Get customer by ID
  getCustomerById(customerId) {
    return this.customers.find((customer) => customer.id === customerId);
  }

  // Create a new order
  createOrder(customerId, productId, quantity) {
    const customer = this.getCustomerById(customerId);
    const product = this.getProductById(productId);

    if (customer && product && product.stock >= quantity) {
      const order = new Order(customer, product, quantity);
      this.orders.push(order);
      product.stock -= quantity;
      return order;
    }

    return null;
  }

  // Get product by ID
  getProductById(productId) {
    return this.products.find((product) => product.id === productId);
  }

  // Get all orders for a customer
  getCustomerOrders(customerId) {
    return this.orders.filter((order) => order.customer.id === customerId);
  }
}

// Product Class
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// Customer Class
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Order Class
class Order {
  static nextId = 1;

  constructor(customer, product, quantity) {
    this.id = Order.nextId++;
    this.customer = customer;
    this.product = product;
    this.quantity = quantity;
  }

  totalPrice() {
    return this.product.price * this.quantity;
  }
}

// Instantiate marketplace
const marketplace = new Marketplace("My Virtual Marketplace");

// Add products to the marketplace
const product1 = new Product(1, "Product1", 10, 100);
const product2 = new Product(2, "Product2", 15, 50);
marketplace.addProduct(product1);
marketplace.addProduct(product2);

// Register customers
const customer1 = new Customer(1, "John Doe", "john@example.com");
const customer2 = new Customer(2, "Jane Smith", "jane@example.com");
marketplace.registerCustomer(customer1);
marketplace.registerCustomer(customer2);

// Create orders
const order1 = marketplace.createOrder(1, 1, 5);
const order2 = marketplace.createOrder(2, 2, 3);
const order3 = marketplace.createOrder(2, 1, 2);

// Output orders
console.log("Customer 1 Orders:", marketplace.getCustomerOrders(1));
console.log("Customer 2 Orders:", marketplace.getCustomerOrders(2));

// Remove a product from the marketplace
marketplace.removeProduct(1);

// Output updated product list
console.log("Updated Products:", marketplace.products);