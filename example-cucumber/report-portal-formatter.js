const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');
require('dotenv/config');

const rpConfig = {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  launch: 'Cucumber regression',
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
  description: 'Your launch name description',
  scenarioBasedStatistics: true,
  restClientConfig: {
    timeout: 0,
  },
};

module.exports = createRPFormatterClass(rpConfig);
