Feature: escenario 1

@user1 @web
Scenario: Hacer login, crear un nuevo miembro, ir al listado de miembros, seleccionarlo del listado y eliminarlo
  Given I navigate to page "http://localhost:3001/ghost/"
  And I wait for 2 seconds
  And I save screenshot v435 "1" "1"
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I save screenshot v435 "1" "2"
  And I click members
  And I wait for 2 seconds
  And I save screenshot v435 "1" "3"
  And I click new member
  And I wait for 3 seconds
  And I save screenshot v435 "1" "4"
  When I enter name member v435 "Test Name"
  And I wait for 2 seconds
  When I enter email member v435 "test_ghost@ghost.co"
  And I wait for 2 seconds
  Then I click save member
  And I wait for 3 seconds
  And I save screenshot v435 "1" "5"
  And I click members
  And I wait for 2 seconds
  And I save screenshot v435 "1" "6"
  And I select member by name
  And I wait for 3 seconds
  And I click delete member v435
  And I wait for 1 seconds
  And I save screenshot v435 "1" "7"
  And I click confirm delete member v435
  And I wait for 1 seconds
  And I save screenshot v435 "1" "8"
  Then I wait for 3 seconds



























  
