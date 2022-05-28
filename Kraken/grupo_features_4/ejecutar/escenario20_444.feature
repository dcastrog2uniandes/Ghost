Feature: Como administrador quiero revocar la subscripcion a un miembro

@user1 @web
Scenario Outline: Revocar subscripción 4.44

Given I navigate to page "http://localhost:3002/ghost/#/signin"
  When I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I wait for 2 seconds
  And I enter password "<PASSWORD>"
  When I wait for 2 seconds
  And I click in login
  When I wait for 3 seconds
  And I go to Members page
  When I wait for 2 seconds
  And I pick the first member of the list
  When I wait for 2 seconds
  And I click configuration member
  And I click delete member
  When I wait for 2 seconds
  And I click confirm delete member
  Then I navigate to page "http://localhost:3002/ghost/#/members"
  And I wait for 5 seconds


