Feature: Como usuario quiro cambiar de contraseña

@user1 @web
Scenario: Cambiar contraseña 4.44

Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I save screenshot v444 "10" "1"
  When I wait for 1 seconds
  When I enter email "<USERNAME>"
  When I wait for 1 seconds
  And I enter password "<PASSWORD>"
  When I wait for 1 seconds
  And I click in login
  When I wait for 3 seconds
  And I save screenshot v444 "10" "2"
  And I go to settings page
  When I wait for 2 seconds
  And I save screenshot v444 "10" "3"
  And I click in Staff
  When I wait for 2 seconds
  And I save screenshot v444 "10" "4"
  And I choose admin user
  When I wait for 1 seconds
  And I save screenshot v444 "10" "5"
  And I enter old password "<PASSWORD>"
  And I enter new password "Mari123456"
  And I enter verification of new password "Mari123456"
  When I wait for 1 seconds
  And I click change password
  And I wait for 3 seconds
  And I save screenshot v444 "10" "6"
  And The new password should be old password
  Then I wait for 3 seconds
  And I save screenshot v444 "10" "7"
  And I navigate to page "http://localhost:3002/ghost/#/dashboard"

