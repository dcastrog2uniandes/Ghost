
Feature: Uno 435


@user1 @web
Scenario: Uno 435
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 1 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I save screenshot v435 "14" "1"
    And I click Sign in
    And I wait for 1 seconds
    And I click Members
    And I wait for 1 seconds
    And I save screenshot v435 "14" "2"
    And I click first member
    And I wait for 1 seconds
    And I save screenshot v435 "14" "3"
    And I click delete member
    And I wait for 1 seconds
    And I save screenshot v435 "14" "5"
    And I click confirm delete member
    And I wait for 2 seconds
    And I save screenshot v435 "14" "6"
    
  