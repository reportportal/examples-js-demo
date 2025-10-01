@requirement:Workday_definition @demo
Feature: Is it Holiday yet?
  Everybody wants to know when **Saturday** is

  Background: Load Holidays
    Given list of holidays

  @requirement:Workday_definition @priority:high
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

  @requirement:Workday_definition @priority:low
  Scenario: April Fool's is not Holiday
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280). Check the _holidays_
    
    Given today is "Apirl Fool's"
    When I ask wheter it's Holiday
    Then I should be told "Nope"