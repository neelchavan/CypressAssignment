import HomePage from "../PageObjects/HomePage";

describe("Home page tests", () => {
  const hp = new HomePage();
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("check if all the links in the footer section are working properly", () => {
    hp.getAllTheLinksInTheFooter().each((el, index) => {
      cy.request(el.prop("href")).its("status").should("eq", 200);
    });
  });

  it("check if all the links in the navbar section are working properly", () => {
    hp.getAllTheLinksInTheNavbar().each((el, index) => {
      cy.request(el.prop("href")).its("status").should("eq", 200);
    });
  });
});
