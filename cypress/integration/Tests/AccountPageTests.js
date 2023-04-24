/// <reference types="Cypress" />

import AccountPage from "../PageObjects/AccountPage";
import HomePage from "../PageObjects/HomePage";

describe("Account page test", () => {
  const accountPage = new AccountPage();
  const homePage = new HomePage();
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify if already registered account is not getting registered again", () => {
    // go to accounts page from home page
    homePage.getAccountLinkAndClick();
    // type already registered credentials and click on 'REGISTER' button
    accountPage.getRegisterUsernameField().type("neelchavan");
    accountPage.getRegisterEmailField().type("neel@gmail.com");
    accountPage.getRegisterPasswordField().type(123456);
    accountPage.getRegisterButtonAndClick();
    // verify if user is not getting registered again
    accountPage.getRegisterErrorMessage().then((el) => {
      expect(el.text()).to.equal("Please log in.");
    });
  });

  it("Verify when user provides valid username and password he should be able to login into the application", function () {
    // from home page go to account page and perform login
    cy.login(this.data.loginUsername, this.data.loginPassword);
    // verify if user is logged in
    accountPage.getDisplayNameAfterLogin().then((el) => {
      expect(el.text()).to.equal("neelchavan");
    });
  });

  it("Verify if user can logout successfully after he is logged in", function () {
    // from home page go to account page and perform login
    cy.login(this.data.loginUsername, this.data.loginPassword);
    // verify if user is logged in
    accountPage.getDisplayNameAfterLogin().then((el) => {
      expect(el.text()).to.equal("neelchavan");
    });
    // now logout from the application
    accountPage.getLogoutButtonAndClick();
    // verify if user is logged out
    cy.get("strong").should("not.exist");
  });
});
