
Feature: Uno 444


@user1 @web
Scenario: Uno 444
    Given I navigate to page "http://localhost:3002/ghost/"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I save screenshot v444 "14" "1"
    And I click Sign in
    And I wait for 1 seconds
    And I click Members
    And I wait for 1 seconds
    And I save screenshot v444 "14" "2"
    And I click first member
    And I wait for 1 seconds
    And I save screenshot v444 "14" "3"
    And I click delete member
    And I wait for 1 seconds
    And I save screenshot v444 "14" "5"
    And I click confirm delete member
    And I wait for 2 seconds
    And I save screenshot v444 "14" "6"
    
  