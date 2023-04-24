import CartPage from "../PageObjects/CartPage";
import HomePage from "../PageObjects/HomePage";

describe("Cart page tests", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify when product is added to the cart the cart page should get updated accordingly", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();
    // add desired products to the cart
    cy.addProductToCart(this.data.productNames[0]);
    // go to the cart
    homePage.getOpenCartBtnAndClick();
    // verify if we have added the correct products to the cart
    cartPage.getProductNamesOnTheCart().each((el) => {
      expect(el.text()).to.equal(this.data.productNames[0]);
    });
  });

  it("Check when the user logs out and logs in again his cart detail should be retained", function () {
    // login into your account
    cy.login(this.data.loginUsername, this.data.loginPassword);

    // go to the store page
    homePage.getStoreLinkAndClick();

    // add your desired product to the cart
    cy.addProductToCart(this.data.productNames[1]);

    // now go to account section and logout
    homePage.getAccountLinkAndClick();
    homePage.getLogoutBtnAndClick();

    // now login again
    cy.login(this.data.loginUsername, this.data.loginPassword);

    // go to cart and verify if the cart conent is correct
    homePage.getOpenCartBtnAndClick();
    cartPage.getProductNamesOnTheCart().then((el) => {
      expect(el.text()).to.equal(this.data.productNames[1]);
    });
    // after verifying remove the product from the cart for future test cases
    cartPage.getRemoveProductBtnFromCartAndClick();
  });
});
