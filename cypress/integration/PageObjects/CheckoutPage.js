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

  getCountrySearchBox(value) {
    return cy.get(".select2-search__field").type(value);
  }

  getStreetAddressTextBoxAndType(value) {
    return cy.get("#billing_address_1").type(value);
  }

  getPostalCodeTextBoxAndType(value) {
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
}
export default CheckoutPage;
