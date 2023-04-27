/// <reference types="Cypress" />

import CartPage from "../PageObjects/CartPage";
import CheckoutPage from "../PageObjects/CheckoutPage";
import HomePage from "../PageObjects/HomePage";
import StorePage from "../PageObjects/StorePage";

describe("checkout page tests", () => {
  const homePage = new HomePage();
  const storePage = new StorePage();
  const cartPage = new CartPage();

  const checkoutPage = new CheckoutPage();
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify if user cannot place the order without filling the mandatory fields", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();
    // add desired product to cart
    cy.addProductToCart(this.data.productNames[1]);
    // go to cart and proceed to checkout
    homePage.getOpenCartBtnAndClick();
    cartPage.getProceedToCheckoutBtnAndClick();
    // verify that without filling the form you cannot place the order
    checkoutPage.getPlaceOrderBtnAndClick();
    checkoutPage.getCheckoutPageErrorAlerts().should("be.visible");
  });

  it("Verify if user can successfully purchase the product", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();
    // add desired product to cart
    cy.addProductToCart(this.data.productNames[1]);
    // go to cart and proceed to checkout
    homePage.getOpenCartBtnAndClick();
    cartPage.getProceedToCheckoutBtnAndClick();
    // fill the form
    checkoutPage.getFirstNameTextBoxAndType(this.data.formData.firstName);
    checkoutPage.getLastNameTextBoxAndType(this.data.formData.lastName);
    checkoutPage.getCountryDropdownAndClick();
    checkoutPage.getCountrySearchBoxAndType(this.data.formData.searchQuery);
    checkoutPage.getCounryOptions().each(function (el) {
      if (el.text().startsWith(this.data.formData.searchQuery)) {
        cy.wrap(el).click();
      }
    });
    checkoutPage.getStreetAddressTextBoxAndType(
      this.data.formData.streetAddress
    );
    checkoutPage.getCityAndType(this.data.formData.city);
    checkoutPage.getSateDropdownAndClick();
    checkoutPage.getStateSearchBoxAndType(this.data.formData.searchQueryState);
    checkoutPage.getStateOptions().each(function (el) {
      if (el.text().startsWith(this.data.formData.searchQueryState)) {
        cy.wrap(el).click();
      }
    });
    checkoutPage.getPinCodeTextBoxAndType(this.data.formData.postalCode);
    checkoutPage.getEmailAndType(this.data.formData.email);
    // submit the form and place the order
    checkoutPage.getPlaceOrderBtnAndClick();
    // verify if the order is placed
    checkoutPage.getOrderRecievedMsg().then((el) => {
      expect(el.text()).to.equal(""); // Thank you. Your order has been received.
    });
  });
});
