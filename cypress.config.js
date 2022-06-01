const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 1400,

  component: {
    setupNodeEvents(on, config) {},
    specPattern: "e2e/**/*{test}.{js, jsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
