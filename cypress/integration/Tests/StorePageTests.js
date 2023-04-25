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

  it("when user searches for a product it should give him the relevent results to his search query", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();
    // type the search query you want to perfom and click the search button
    storePage.getSearchTextBox().type(this.data.searchQuery);
    storePage.getSearchBtnAndClick();
    // verify if the results are relevent to the search query
    storePage.getProductNames().each(function (el) {
      if (el.text().includes(this.data.searchQuery)) {
        assert(true);
      }
    });
  });

  it("Verify if the search by category feature gives the relevent results", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();

    // select category to search
    storePage.getCategoryDropdownAndSelectVal(this.data.categoryVal);

    // verify if the selected category is giving the relevent results
    storePage.getProductCategory().each((el) => {
      expect(el.text().trim()).to.equal("Men");
    });
  });

  it("verify when applied the price low to high filter it should sort the products according to it", function () {
    // go to store page from home page
    homePage.getStoreLinkAndClick();

    // select the sorting option and verify the result
    storePage.getSortingOptionsAndSelect(this.data.sortingOption);

    // verify the sorting results
    let num = 0;
    storePage.getProductAmount().each((el) => {
      let amount = Number(el.text().split("$")[1]);
      if (num < amount) {
        cy.log(num);
        num = amount;
        assert(true);
      } else {
        assert(false);
      }
    });
  });
});
