Feature: Como usuario quiro editar un Tag

  @user1 @web
  Scenario: Editar tag 4.44
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  When I wait for 2 seconds
  And I save screenshot v444 "9" "1"
  When I enter email "<USERNAME>"
  When I wait for 1 seconds
  And I enter password "<PASSWORD>"
  When I wait for 1 seconds
  And I click in login
  When I wait for 2 seconds
  And I save screenshot v444 "9" "2"
  And I go to Tags and click on it
  And I wait for 2 seconds
  And I save screenshot v444 "9" "3"
  And I click in new tag
  When I wait for 2 seconds
  And I save screenshot v444 "9" "4"
  And I create a tag
  And I wait for 2 seconds
  And I save screenshot v444 "9" "5"
  And I save a tag
  When I wait for 2 seconds
  And I save screenshot v444 "9" "6"
  And I navigate to page "http://localhost:3002/ghost/#/tags"
  And I wait for 2 seconds
  And I save screenshot v444 "9" "7"
  And Search the first tag on the list
  When I wait for 2 seconds
  And I save screenshot v444 "9" "8"
  And Change the name of the tag for "$name_1"
  And I click in button save
  And I save screenshot v444 "9" "9"
  Then I navigate to page "http://localhost:3002/ghost/#/tags"
  And I wait for 3 seconds


