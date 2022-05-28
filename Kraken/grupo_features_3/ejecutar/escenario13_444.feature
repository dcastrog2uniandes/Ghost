
Feature: Crear Staff v444


@user1 @web
Scenario: Loguearme y eliminar tag
    Given I navigate to page "http://localhost:3002/ghost/"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I save screenshot v444 "13" "1"
    And I click Sign in
    And I wait for 1 seconds
    And I click Configuration
    And I wait for 1 seconds
    And I save screenshot v444 "13" "2"
    And I navigate to page "http://localhost:3002/ghost/#/settings"
    And I wait for 1 seconds
    And I click Staff
    And I save screenshot v444 "13" "3"
    And I wait for 1 seconds
    And I click Invite People
    And I wait for 1 seconds
    And I save screenshot v444 "13" "4"
    And I write email staff
    And I wait for 1 seconds
    And I save screenshot v444 "13" "5"
    And I click send invitation
    And I wait for 2 seconds
    And I save screenshot v444 "13" "6"
    
  