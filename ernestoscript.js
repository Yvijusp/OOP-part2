class Product {
  constructor(name, price, salePrice, category) {
    this.name = name;
    this.price = price;
    this.salePrice = salePrice ? salePrice : null;
    this.category = category;
  }
  getProductIntro() {
    let currentPrice = this.salePrice ? this.salePrice : this.price;
    return `${this.name}: ${currentPrice}€`;
  }
  getProductSale() {
    if (this.salePrice) {
      return `${this.salePrice}€`;
    } else {
      return `${this.name} akcija nera taikoma`;
    }
  }
}

// Single products
const shoeNike = new Product('Nike shoes', 20, null, ['Shoes']);
const pantsAdidas = new Product('Adidas pants', 30, 15, ['Pants']);
const shirtAdidas = new Product('Adidas shirt', 20, 10, ['T-shirts']);
const sweaterAdidas = new Product('Adidas sweater', 40, 40, ['Sweaters']);
const pantsNike = new Product('Nike pants', 59, 40, ['Pants']);

// All products
const currentProducts = [
  shoeNike,
  pantsAdidas,
  shirtAdidas,
  sweaterAdidas,
  pantsNike,
];

// Filtrai
const filterProductsByPrice = (productsArray, arg1, arg2) => {
  // arg1 = number
  // arg2 = number or string ("nuo"/"iki")
  if (typeof arg2 === 'string') {
    if (arg2 === 'nuo') {
      return productsArray.filter((product) => {
        let price = product.salePrice ? product.salePrice : product.price;
        return price >= arg1;
      });
    } else if (arg2 === 'iki') {
      return productsArray.filter((product) => {
        let price = product.salePrice ? product.salePrice : product.price;
        return price <= arg1;
      });
    }
  } else {
    return productsArray.filter((product) => {
      let price = product.salePrice ? product.salePrice : product.price;
      return price > arg1 && price < arg2;
    });
  }
};
