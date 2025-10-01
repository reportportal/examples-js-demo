import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

function getExpectedTitle() {
  return [true, 'true'].includes(process.env.RP_FIX_TESTS ?? '') ? 'Playwright' : 'ReportPortal';
}

const suiteName = 'The Playwright`s website main page should';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'requirement',
      value: 'Page_title',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(`
    This suite covers the main page of the **Playwright** website. It contains tests that check the website _title_ and _navigation_ bar.
  `, suiteName);

  test('contain the "ReportPortal" word', async ({ page, browserName }) => {
    console.log('Add **ReportPortal** related *metadata* before starting main test actions.');
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'requirement',
        value: 'Page_title',
      },
      {
        key: 'priority',
        value: 'medium',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`
      Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278). 
      This test simply checks that **Playwright** website contains **"ReportPortal"** word in the navigation bar.
      But seems like this test will *fail*.
    `);
    await page.waitForTimeout(1000);

    console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');
    await page.waitForTimeout(1000);
    console.log('`Navigate` to the main website page.');
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await page.waitForTimeout(1000);
    await expect(title).toHaveText(getExpectedTitle());
  });

  test('have the correct title', async ({ page, browserName }) => {
    console.log('`Navigate` to the main website page.');
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'requirement',
        value: 'Page_title',
      },
      {
        key: 'priority',
        value: 'medium',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`
      Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278). 
      This test simply checks that **Playwright** website contains the correct title.
    `);
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(500);
    const title = page.locator('.navbar__inner .navbar__title');
    await page.waitForTimeout(Math.random() * 1000);
    await expect(title).toHaveText(getExpectedTitle());
  });

  test('should pass in case the title is correct', async ({ page, browserName }) => {
    console.log('Add **ReportPortal** related *metadata* before starting main test actions.');
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'requirement',
        value: 'Page_title',
      },
      {
        key: 'priority',
        value: 'medium',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`
      Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278).
      This test simply checks that **Playwright** website contains the correct title.
    `);
    await page.waitForTimeout(500);
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await page.waitForTimeout(3000);
    await expect(title).toHaveText(getExpectedTitle());
  });

  test('should contain "Playwright" word', async ({ page, browserName }) => {
    console.log('`Navigate` to the main website page.');
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'requirement',
        value: 'Page_title',
      },
      {
        key: 'priority',
        value: 'high',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278). This test simply checks that **Playwright** website contains the `Playwright` word in the navigation bar.');
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(500);
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

  test('should retest the right title exists', async ({ page, browserName }) => {
    console.log('Add **ReportPortal** related *metadata* before starting main test actions.');
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'requirement',
        value: 'Page_title',
      },
      {
        key: 'priority',
        value: 'low',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`
      Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278).
      This test simply checks that **Playwright** website contains **"ReportPortal"** word in the navigation bar.
      But seems like this test will *fail*.
    `);
    test.skip();

    console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');

    await page.waitForTimeout(1000);

    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');

    await page.waitForTimeout(1000);
    await expect(title).toHaveText(getExpectedTitle());
  });
});
