Feature: Como administrador quiero eliminar un post que se encuentra en borrador

@user1 @web
Scenario Outline: Eliminar post en borrador 4.35

Given I navigate to page "http://localhost:3001/ghost/#/signin"
When I wait for 2 seconds
When I enter email "<USERNAME>"
When I wait for 2 seconds
And I enter password "<PASSWORD>"
When I wait for 2 seconds
And I click in login
When I wait for 5 seconds
And I go to Drafs page
When I wait for 3 seconds
And I pick the first post of the list
When I wait for 4 seconds
And I click settings post
And I click delete post
When I wait for 4 seconds
And I click confirm delete post
When I wait for 4 seconds
Then I navigate to page "http://localhost:3001/ghost/#/posts?type=draft"
And I wait for 5 seconds