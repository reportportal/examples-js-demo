@feature:holiday @demo
Feature: Is it Holiday yet?
  Everybody wants to know when **Saturday** is

  Background: Load Holidays
    Given list of holidays

  @feature:holiday
  Scenario Outline: Today is or is not Holiday
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280). Check the _holidays_

    Given today is "<day>"
    When I ask wheter it's Holiday
    Then I should be told "<answer>"

    Examples:
      | day            | answer |
      | Presidents     | Yes    |
      | Valentines     | Nope   |
      | Independence   | Yes    |
      | St.Patrick's   | Nope   |

  @feature:holiday-in-april
  Scenario: April Fool's is not Holiday
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280). Check the _holidays_
    
    Given today is "Apirl Fool's"
    When I ask wheter it's Holiday
    Then I should be told "Nope"