@feature:workday @demo
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  @scenario:friday
  Scenario Outline: Today is or is not Friday
    Check the `friday`

    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

    Examples:
      | day            | answer |
      | Friday         | TGIF   |
      | Sunday         | Nope   |
      | anything else! | Nope   |

  @scenario:monday
  Scenario: Today is or is not Monday (but it's failing)
    Check the `monday`

    Given today is Monday
    When I ask whether it's Monday yet
    Then I should be told Yes
