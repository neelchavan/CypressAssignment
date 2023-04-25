class CheckoutPage {
  getFirstNameTextBoxAndType(value) {
    return cy.get("#billing_first_name").type(value);
  }

  getLastNameTextBoxAndType(value) {
    return cy.get("#billing_last_name").type(value);
  }

  getCountryDropdownAndClick() {
    return cy.get("#select2-billing_country-container").click();
  }

  getCountrySearchBoxAndType(value) {
    return cy.get(".select2-search__field").type(value);
  }

  getCounryOptions() {
    return cy.get("[role='option']");
  }

  getSateDropdownAndClick() {
    return cy.get("#select2-billing_state-container").click();
  }

  getStateSearchBoxAndType(value) {
    return cy.get(".select2-search__field").type(value);
  }

  getStateOptions() {
    return cy.get("[role='option']");
  }

  getStreetAddressTextBoxAndType(value) {
    return cy.get("#billing_address_1").type(value);
  }

  getPinCodeTextBoxAndType(value) {
    return cy.get("#billing_postcode").type(value);
  }

  getCityAndType(value) {
    return cy.get("#billing_city").type(value);
  }

  getEmailAndType(value) {
    return cy.get("#billing_email").type(value);
  }

  getPlaceOrderBtnAndClick() {
    return cy.get("#place_order").click();
  }

  getCheckoutPageErrorAlerts() {
    return cy.get(".woocommerce-error");
  }

  getOrderRecievedMsg() {
    return cy.get(".woocommerce-order p");
  }
}
export default CheckoutPage;
