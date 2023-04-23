const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://askomdch.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/Tests/*.js",
  },
});
