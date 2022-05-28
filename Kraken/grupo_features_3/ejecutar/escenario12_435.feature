
Feature: Reenviar una invitacion a un miembro del staff


@user1 @web
Scenario: Loguearme reenviar correo
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I save screenshot v435 "8" "1"
    And I click Sign in
    And I wait for 1 seconds
    And I save screenshot v435 "8" "2"
    And I click Configuration
    And I wait for 1 seconds
    And I save screenshot v435 "8" "3"
    And I navigate to page "http://localhost:3001/ghost/#/settings"
    And I wait for 1 seconds
    And I save screenshot v435 "8" "4"
    And I click Staff
    And I wait for 1 seconds
    And I save screenshot v435 "8" "5"
    And I click Resend
    And I wait for 2 seconds
    And I save screenshot v435 "8" "6"
    
  