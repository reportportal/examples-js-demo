const config = {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  launch: 'Playwright e2e tests regression',
  project: process.env.RP_PROJECT,
  attributes: [
    {
      key: 'agent',
      value: 'playwright',
    },
    {
      value: 'example',
    },
  ],
  description: 'This is launch with **playwright** tests',
  includeTestSteps: true,
  launchUuidPrint: true,
  skippedIssue: false,
  restClientConfig: {
    timeout: 0,
  },
};

module.exports = { config };
