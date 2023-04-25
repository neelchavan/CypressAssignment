class StorePage {
  getProductNames() {
    return cy.get(".product-type-simple h2");
  }

  getAddToCartButton(index) {
    return cy.get(`.products.columns-4 li:nth-child(${index}) .button`);
  }

  getSearchTextBox() {
    return cy.get("[type='search']");
  }

  getSearchBtnAndClick() {
    return cy.get("[value='Search']").click();
  }

  getProductCategory() {
    return cy.get(".ast-woo-product-category");
  }

  getCategoryDropdownAndSelectVal(value) {
    return cy.get("#product_cat").select(value);
  }

  getSortingOptionsAndSelect(value) {
    return cy.get(".orderby").select(value).should("have.value", value);
  }

  getProductAmount() {
    return cy.get(".price ins span bdi");
  }
}

export default StorePage;
