const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // for html reports
  env: {
    baseUrl: "https://askomdch.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on); // for html reports
    },
    specPattern: "cypress/integration/Tests/CheckoutPageTests.js",
  },
});
