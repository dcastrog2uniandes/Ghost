Feature: Login, list post, and create post 
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts
                Given I navigate to page "<LOGINPAGE44>"
                And I save screenshot v444 "11" "1"
                And I wait for 2 seconds
                When I enter email "<USERNAME>"
                And I wait for 1 seconds
                And I enter password "<PASSWORD>"
                And I wait for 1 seconds
                And I click sing in
                And I wait for 2 seconds
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I save screenshot v444 "11" "2"
                And I enter new post title "Nuevo post"
                And I wait for 3 seconds
                And I save screenshot v444 "11" "3"
                And I enter new post body "body text post"
                And I save screenshot v444 "11" "4"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I save screenshot v444 "11" "4"
                And I wait for 3 seconds

        
