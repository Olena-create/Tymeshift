const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    chromeWebSecurity: false,
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
