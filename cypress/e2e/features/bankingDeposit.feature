Feature: Login Feature

Background:
    Given I am in "Banking" page
Scenario: 
    And I login as "Customer" "Harry Potter"
    When I deposit "100" amount
    Then I validate the amount "100" is credited Successfully