/// <reference types="Cypress" />
describe("Verify all links on footer working", () => {
  it("should verify all links are working", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(".site-primary-footer-wrap a").each((el, index, list) => {
      cy.request(el.prop("href")).its("status").should("eq", 200);
    });
  });
});
