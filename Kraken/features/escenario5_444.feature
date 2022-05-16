Feature: escenario 5

@user1 @web
Scenario: Hacer login, ir a configuración, ajustes generales y cambiar el tema del sitio. Ir a la pagina principal para ver el cambio.
  Given I navigate to page "http://localhost:3002/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I click settings
  And I wait for 1 seconds
  And I click general
  And I wait for 1 seconds
  And I click expand publication info
  And I wait for 1 seconds
  And I enter site them "Maestría en Ingeniería de Software"
  And I wait for 1 seconds
  And I click save general settings
  And I wait for 3 seconds
  Then I navigate to page "http://localhost:3002/"
  Then I wait for 3 seconds



























  
