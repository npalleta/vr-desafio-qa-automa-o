const { defineConfig }              = require('cypress');
// Allure Reports
const allureWriter                  = require('@shelex/cypress-allure-plugin/writer');
// For Cucumber Integration
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createBundler                 = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin           = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const getCompareSnapshotsPlugin     = require('cypress-visual-regression/dist/plugin');
const webpackPreprocessor           = require('@cypress/webpack-preprocessor');
// const nodePolyfills              = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);

      getCompareSnapshotsPlugin(on, config);

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    chromeWebSecurity: false,
    screenshotsFolder: './cypress/snapshots/actual',
    specPattern: '**/*.feature',
    supportFile: false,
    trashAssetsBeforeRuns: true,
  },
  env: {
    allureReuseAfterSpec: true,
    failSilently: false,
  },
});
