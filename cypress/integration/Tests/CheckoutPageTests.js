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
  });
});
