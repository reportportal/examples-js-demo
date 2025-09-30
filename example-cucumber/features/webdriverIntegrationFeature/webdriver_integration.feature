@feature:webdriver @demo
Feature: Webdriver integration
  Check the `cucumber.js` repo with the help of Webdriver

  @feature:webdriver
  Scenario: Open cucumber-js GitHub page
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280).<br/>
    This test should load `GitHub cucumber-js` page and take the screenshot!

    Given I am on the Cucumber.js GitHub repository
    When I click on 'CLI'
    # just for the test fail
    Then I should see 'TEST FAIL'
