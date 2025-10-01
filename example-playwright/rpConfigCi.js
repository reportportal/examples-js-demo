require('dotenv/config');

const config = {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  launch: 'Playwright regression E2E tests',
  project: process.env.RP_PROJECT,
  attributes: [
    {
      key: 'framework',
      value: 'playwright',
    },
    {
      key: 'build',
      value: process.env.GITHUB_RUN_NUMBER || 'local',
    },
    {
      value: 'demo',
    }
  ],
  description: 'This launch contains the `playwright` E2E tests',
  includeTestSteps: true,
  launchUuidPrint: true,
  skippedIssue: false,
  restClientConfig: {
    timeout: 0,
  },
};

module.exports = { config };
