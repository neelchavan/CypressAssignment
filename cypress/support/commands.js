// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import AccountPage from "../integration/PageObjects/AccountPage";
import HomePage from "../integration/PageObjects/HomePage";
import StorePage from "../integration/PageObjects/StorePage";

// login method
Cypress.Commands.add("login", function (username, password) {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  // go to account page from home page
  homePage.getAccountLinkAndClick();
  accountPage.getLoginusernameField().type(username);
  accountPage.getLoginPasswordField().type(password);
  accountPage.getLoginButonAndClick();
});

// open desired product detail page
Cypress.Commands.add("openProductDetailPage", (nameOfProduct) => {
  const storePage = new StorePage();
  storePage.getProductNames().each((el, index, list) => {
    if (el.text().includes(nameOfProduct)) {
      storePage.getProductNames().eq(index).click();
    }
  });
});

// add desired product to the cart
Cypress.Commands.add("addProductToCart", (nameOfProduct) => {
  const storePage = new StorePage();
  storePage.getProductNames().each((el, index, list) => {
    if (el.text() === nameOfProduct) {
      // index+1 because nth:child() indexes starts from 1.
      storePage.getAddToCartButton(index + 1).click();
    }
  });
});
