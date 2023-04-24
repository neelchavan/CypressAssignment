/// <reference types="Cypress" />
class HomePage {
  getAccountLinkAndClick() {
    cy.contains("Account").click();
  }

  getAllTheLinksInTheFooter() {
    return cy.get(".site-primary-footer-wrap a");
  }

  getAllTheLinksInTheNavbar() {
    return cy.get(".site-header-primary-section-right nav li a");
  }

  getStoreLinkAndClick() {
    return cy.contains("Store").click();
  }

  getOpenCartBtnAndClick() {
    return cy.get("#ast-desktop-header .cart-container").click();
  }

  getLogoutBtnAndClick() {
    return cy.contains("Logout").click();
  }
}
export default HomePage;
