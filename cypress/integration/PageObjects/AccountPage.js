class AccountPage {
  getRegisterUsernameField() {
    return cy.get(".register [name='username']");
  }

  getRegisterEmailField() {
    return cy.get(".register [name='email']");
  }

  getRegisterPasswordField() {
    return cy.get(".register [name='password']");
  }

  getRegisterButtonAndClick() {
    return cy.get(".register [name='register']").click();
  }

  getRegisterErrorMessage() {
    return cy.get("[role='alert'] li a");
  }

  getLoginusernameField() {
    return cy.get(".login [name='username']");
  }

  getLoginPasswordField() {
    return cy.get(".login [name='password']");
  }

  getLoginButonAndClick() {
    return cy.get(".login [name='login']").click();
  }

  getDisplayNameAfterLogin() {
    return cy.get("strong").eq(0);
  }

  getLogoutButtonAndClick() {
    return cy.contains("Logout").click();
  }
}
export default AccountPage;
