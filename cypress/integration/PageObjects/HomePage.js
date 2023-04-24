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
}
export default HomePage;
