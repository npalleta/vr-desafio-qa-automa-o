const reporter = require('cucumber-html-reporter');

const dateNow  = (getTodaysDate = () => {
  //
  let today    = new Date();
  let dd       = `${today.getDate()}`.padStart(2, '0');
  let mm       = `${today.getMonth() + 1}`.padStart(2, '0'); // January is 0! But, + 1 in month should fix this.
  let yyyy     = today.getFullYear();
  let time     = today.toLocaleString('pt-BR', {
    hour:      '2-digit',
    minute:    '2-digit',
    second:    '2-digit',
  });
  //
  return `${dd}.${mm}.${yyyy}.${time.replaceAll(':', '.')}`;
});

var options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/cucumber-json/',
  output: `cypress/cucumber-report/report_${dateNow()}.html`,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'Test Environment': 'HOMOLOG',
    Browser: 'Chrome',
    Platform: 'Any',
    Executed: 'Any',
  },
};

reporter.generate(options);
