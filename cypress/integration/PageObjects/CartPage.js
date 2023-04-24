class CartPage {
  getProductNamesOnTheCart() {
    return cy.get("table td:nth-child(3) a");
  }

  getRemoveProductBtnFromCartAndClick() {
    return cy.get(".product-remove a").click();
  }
}
export default CartPage;
