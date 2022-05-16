Feature: Login, list post, and edit post 
        @user3 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts
                Given I navigate to page "<LOGINPAGE43>"
                And I wait for 3 seconds
                And I save screenshot v435 "6" "1"
                When I enter email "<USERNAME>"
                And I wait for 2 seconds
                And I enter password "<PASSWORD>"
                And I wait for 2 seconds
                And I click sing in
                And I wait for 2 seconds
                And I save screenshot v435 "6" "2"
                Then I navigate to page "<NEWPOSTPAGE43>"
                And I save screenshot v435 "6" "3"
                And I enter new post title "Post One"
                And I wait for 2 seconds
                And I save screenshot v435 "6" "4"
                And I enter new post body "body text post"
                And I wait for 2 seconds
                Then I navigate to page "<LISTPOSTPAGE43>"
                And I wait for 2 seconds
                And I save screenshot v435 "6" "5"
                Then I navigate to page "<NEWPOSTPAGE43>"
                And I enter new post title "Post Two"
                And I wait for 2 seconds
                And I enter new post body "body text post"
                And I wait for 2 seconds
                Then I navigate to page "<LISTPOSTPAGE43>"
                And I wait for 2 seconds
                And I save screenshot v435 "6" "6"
                Then I navigate to page "<NEWPOSTPAGE43>"
                And I enter new post title "Post Threeeeeeeeee"
                And I wait for 2 seconds
                And I enter new post body "body text post"
                And I wait for 2 seconds
                Then I navigate to page "<LISTPOSTPAGE43>"
                And I wait for 3 seconds
                And I save screenshot v435 "6" "7"
                And I click firts post to edit
                And I wait for 3 seconds
                And I save screenshot v435 "6" "8"
                And I enter new post title "Post Three"
                And I wait for 2 seconds
                Then I navigate to page "<LISTPOSTPAGE43>"
                And I save screenshot v435 "6" "9"
                And I wait for 4 seconds
    