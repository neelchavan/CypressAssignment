class StorePage {
  getProductNames() {
    return cy.get(".product-type-simple h2");
  }

  getAddToCartButton() {
    return cy.contains("Add to cart");
  }
}

export default StorePage;
