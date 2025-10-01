const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');
require('dotenv/config');

const rpConfig = {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  launch: 'Cucumber regression tests',
  project: process.env.RP_PROJECT,
  attributes: [
    {
      key: 'framework',
      value: 'cucumber',
    },
    {
      key: 'build',
      value: process.env.GITHUB_RUN_NUMBER || 'local',
    },
    {
      value: 'demo',
    }
  ],
  description: 'This launch contains the `cucumber` E2E tests',
  scenarioBasedStatistics: true,
  restClientConfig: {
    timeout: 0,
  },
};

module.exports = createRPFormatterClass(rpConfig);
