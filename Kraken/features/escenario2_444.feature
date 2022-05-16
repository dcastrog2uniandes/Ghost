Feature: escenario 2

@user1 @web
Scenario: Hacer login, ir al perfil, modificar los datos, guardar y verificar los cambios desde el listado de miembros
  Given I navigate to page "http://localhost:3002/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I click perfil options
  And I wait for 1 seconds
  And I click your profile
  And I wait for 2 seconds
  When I enter user name "Admin test"
  And I wait for 1 seconds
  When I enter user slug "admin_slug"
  And I wait for 1 seconds
  When I enter user website "https://ghost-uniandes.herokuapp.com/"
  And I wait for 1 seconds
  When I enter user fb_profile "https://facebook.com/test"
  And I wait for 1 seconds
  When I enter user tw_profile "https://twitter.com/test"
  And I wait for 1 seconds
  When I enter user bio "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  And I wait for 1 seconds
  Then I click save profile
  And I wait for 2 seconds
  Then I click settings
  And I wait for 2 seconds
  And I click staff
  And I wait for 2 seconds
  And I click perfil options
  And I wait for 1 seconds
  Then I click signout
  Then I wait for 3 seconds



























  
