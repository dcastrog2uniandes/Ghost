
Feature: Eliminar un TAG 444


@user1 @web
Scenario: Loguearme y eliminar tag 444
    Given I navigate to page "http://localhost:3002/ghost/"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I save screenshot v444 "7" "1"
    And I click Sign in
    And I wait for 1 seconds
    And I save screenshot v444 "7" "2"
    And I click Tags
    And I wait for 2 seconds

    And I click New Tag
    And I wait for 1 seconds
    And I save screenshot v444 "7" "3"
    And I click write name Tag
    And I wait for 2 seconds
    And I save screenshot v444 "7" "4"
    And I click save Tag
    And I wait for 2 seconds
    And I save screenshot v444 "7" "5"
    
    And I click Tags
    And I wait for 2 seconds

    And I save screenshot v444 "7" "6"
    And I click primer tag
    And I wait for 2 seconds
    And I save screenshot v444 "7" "7"
    And I click Delete tag
    And I wait for 2 seconds
    And I save screenshot v444 "7" "8"
    And I click Delete botton
    And I wait for 2 seconds
    And I save screenshot v444 "7" "9"
  


