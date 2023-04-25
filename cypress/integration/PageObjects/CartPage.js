class CartPage {
  getProductNamesOnTheCart() {
    return cy.get("table td:nth-child(3) a");
  }

  getRemoveProductBtnFromCartAndClick() {
    return cy.get(".product-remove a").click();
  }

  getProceedToCheckoutBtnAndClick() {
    return cy.contains("Proceed to checkout").click();
  }
}
export default CartPage;
