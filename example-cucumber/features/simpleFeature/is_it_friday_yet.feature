@feature:workday @demo
Feature: Is it Friday yet?
  Everybody wants to know when it's **Friday**

  @feature:workday
  Scenario Outline: Today is or is not Friday
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280). Check the _friday_

    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

    Examples:
      | day            | answer |
      | Friday         | TGIF   |
      | Sunday         | Nope   |
      | anything else! | Nope   |

  @feature:workday
  Scenario: Today is or is not Monday (but it's failing)
    `Requirements`: Jira ticket [EPMRPP-108280](https://jiraeu.epam.com/browse/EPMRPP-108280). Check the _monday_

    Given today is Monday
    When I ask whether it's Monday yet
    Then I should be told Yes
