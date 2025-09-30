import { PlaywrightTestConfig } from '@playwright/test';
import { config as rpConfig } from './rpConfigCi';

const config: PlaywrightTestConfig = {
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: true,
  workers: 5,
  use: {
    headless: true,
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    video: 'retain-on-failure',
    actionTimeout: 8000,
    navigationTimeout: 40000,
    trace: 'retain-on-failure',
  },
  reporter: [['@reportportal/agent-js-playwright', rpConfig]],
  testDir: './tests',
};

export default config;
