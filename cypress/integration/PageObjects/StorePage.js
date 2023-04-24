class StorePage {
  getProductNames() {
    return cy.get(".product-type-simple h2");
  }

  getAddToCartButton(index) {
    return cy.get(`.products.columns-4 li:nth-child(${index}) .button`);
  }
}

export default StorePage;
