import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'More checks related to the `Playwright` website. It should';

test.describe(suiteName, () => {
  test.describe.configure({ mode: 'serial', retries: 2 }); // use 'serial' mode and retries for this suite

  ReportingApi.addAttributes([
    {
      key: 'component',
      value: 'website',
    },
    {
      key: 'feature',
      value: 'title',
    },
    {
      key: 'feature',
      value: 'get-started',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains several tests that performs some checks with the **Playwright** website main page.',
    suiteName,
  );

  test('have the correct title', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'feature',
        value: 'title',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278). The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,
      e.g. some important notes from the **Test Case Management system**, special conditions, etc.
    `);

    await page.goto('https://playwright.dev/');

    await test.step('step. Have "Playwright" title', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    });

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('redirect to "intro" page after clicking on get started link', async ({ page, browserName }, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        key: 'feature',
        value: 'get-started',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`Requirements: Jira ticket [EPMRPP-108279](https://jiraeu.epam.com/browse/EPMRPP-108279). The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,
      e.g. some important notes from the **Test Case Management system**, special conditions, etc.
    `);

    console.log('The *"Get started"* link will be clicked.');

    await page.goto('https://playwright.dev/');
    let expectedUrl = /.*intrO/;

    if (testInfo.retry > 1) {
      expectedUrl = /.*intro/;
    }

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(expectedUrl);
  });

  test('should be passed when previous tests passed', async ({ page }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'serial',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`Requirements: Jira ticket [EPMRPP-108278](https://jiraeu.epam.com/browse/EPMRPP-108278). The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,
      e.g. some important notes from the **Test Case Management system**, special conditions, etc.
    `);


    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });
});