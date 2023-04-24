/// <reference types="Cypress" />

import HomePage from "../PageObjects/HomePage";
import StorePage from "../PageObjects/StorePage";
import ProductDetailPage from "../PageObjects/ProductDetailPage";

describe("Store page tests", () => {
  const storePage = new StorePage();
  const homePage = new HomePage();
  const productDetailPage = new ProductDetailPage();
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log(this.data.productNames);
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify if the product deatils and name are dilsplayed on the details page", function () {
    // go to store page from home page.
    homePage.getStoreLinkAndClick();
    this.data.productNames.forEach((ele) => {
      cy.openProductDetailPage(ele);
      // verify if we are on the correct product detail page
      let name = ele.toLowerCase().replaceAll(" ", "-");
      cy.url().should("include", name);
      // verify if the product details page opened have correct details
      productDetailPage.getProductHeading().then((el) => {
        expect(el.text()).to.equal(ele);
      });
      cy.go("back");
    });
  });
});
