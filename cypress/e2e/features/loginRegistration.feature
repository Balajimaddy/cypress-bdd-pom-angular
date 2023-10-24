Feature: Login Feature

Background:
    Given I am in "Registration" page
Scenario: Login page
    When I submit Registration details
    Then I validate Registration is Successful