Feature: escenario 3

@user1 @web
Scenario: Hacer login, crear nueva pagina, ir al listado de paginas, seleccionarla y eliminarla.
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 2 seconds
  And I save screenshot v435 "3" "1"
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I save screenshot v435 "3" "2"
  And I click pages
  And I wait for 2 seconds
  And I save screenshot v435 "3" "3"
  And I click new page
  And I wait for 2 seconds
  And I save screenshot v435 "3" "4"
  When I enter page title "Realizando pruebas automatizadas con Kraken"
  And I wait for 3 seconds
  When I enter page content "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan sit. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Est sit amet facilisis magna etiam tempor orci. Elit at imperdiet dui accumsan sit amet nulla facilisi."
  And I wait for 3 seconds
  And I click publish options
  And I wait for 1 seconds
  And I save screenshot v435 "3" "5"
  And I click publish
  And I wait for 3 seconds
  And I save screenshot v435 "3" "6"
  And I click pages from page
  And I wait for 2 seconds
  And I save screenshot v435 "3" "7"
  And I select page by title
  And I wait for 2 seconds
  And I select page settings
  And I wait for 2 seconds
  And I save screenshot v435 "3" "8"
  And I select delete page
  And I wait for 2 seconds
  And I save screenshot v435 "3" "9"
  And I select delete confirm
  And I wait for 1 seconds
  And I save screenshot v435 "3" "10"
  Then I wait for 3 seconds



























  
