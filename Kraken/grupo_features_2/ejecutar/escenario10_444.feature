Feature: Login, list post, and publish post 
        @user5 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Publish Post, Listar Posts
                Given I navigate to page "<LOGINPAGE44>"
                And I wait for 2 seconds
                And I save screenshot v444 "12" "1"
                When I enter email "<USERNAME>"
                And I wait for 1 seconds
                And I enter password "<PASSWORD>"
                And I wait for 1 seconds
                And I click sing in
                And I wait for 2 seconds
                And I save screenshot v444 "12" "2"
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I enter new post title "Post One"
                And I wait for 2 seconds
                And I save screenshot v444 "12" "3"
                And I enter new post body "body text post"
                And I wait for 2 seconds
                And I save screenshot v444 "12" "4"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 2 seconds
                And I save screenshot v444 "12" "5"
                And I click firts post to edit
                And I wait for 2 seconds
                And I save screenshot v444 "12" "6"
                And I click publish post
                And I wait for 3 seconds
                And I save screenshot v444 "12" "7"
                And I click confirm publish post
                And I wait for 3 seconds
                And I save screenshot v444 "12" "8"
                And I click confirm publish post
                And I save screenshot v444 "12" "9"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I save screenshot v444 "12" "10"
                And I wait for 3 seconds
    