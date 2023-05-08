/// <reference types='Cypress' />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber                      = require('cypress-cucumber-preprocessor').default;
const fs                            = require('fs-extra');
const path                          = require('path');
// For Cucumber Integration
const createEsbuildPlugin           = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler                 = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills                 = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

function getConfigurationByFile(file) {
  return fs.readJson(path.resolve('test/cypress/config', `${file}.json`));
}

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // 'on' is used to hook into various events Cypress emits
  // 'config' is the resolved Cypress config
  //
  // Cucumber Preprocessor
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  );
  // Task to read a folders inside a directories
  on('task', {
    getFoldersName: (mainDir) => {
      return fs
        .readdirSync(
          mainDir,
          {
            withFileTypes: true,
          },
          'utf8'
        )
        .filter((item) => item.isDirectory())
        .map((item) => item.name);
    },
    getDirsName: (mainDir) => {
      return fs.readdirSync(
        mainDir,
        {
          withFileTypes: true,
        },
        'utf8'
      );
    },
  });
  // Browser Configuration
  on('before:browser:launch', (browser = {}, launchOptions) => {
    /*
      console.log(launchOptions.args) // print all current args
    */
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--allow-insecure-localhost');
      // launchOptions.args.push('--auto-open-devtools-for-tabs')
      launchOptions.args.push('--disable-dev-shm-usage');
      launchOptions.args.push('--disable-infobars');
      launchOptions.args.push('--disable-gpu');
      launchOptions.args.push('--disable-popup-blocking');
      launchOptions.args.push('--disable-web-security');
      launchOptions.args.push('--enable-automation');
      launchOptions.args.push('--incognito');
      launchOptions.args.push('--profile.default_content_settings.popups=0');
      launchOptions.args.push('--no-sandbox');
      launchOptions.args.push('--reduce-security-for-testing');
      launchOptions.args.push('--start-fullscreen');
      launchOptions.args.push('--test-type');
      /*
        console.log('before:browser:launch browser', browser)
        console.log('before:browser:launch launcOptions', launchOptions)
      */
      //
      return launchOptions;
    }
  });
  //
  // return getConfigurationByFile(config.env.fileConfig || 'none');
  return config;
};
