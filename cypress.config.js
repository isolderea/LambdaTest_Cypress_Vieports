const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //set default config
  //this will run in case nothing else is specified
  //npx cypress run --browser chrome --config viewportWidth=1280,viewportHeight=720
  viewportWidth: 1000,
  viewportHeight: 660,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
