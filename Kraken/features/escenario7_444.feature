Feature: Login, list post, and delete post 
        @user2 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Delete Post, Listar Posts
                Given I navigate to page "<LOGINPAGE44>"
                And I wait for 2 seconds
                And I save screenshot v444 "5" "1"
                When I enter email "<USERNAME>"
                And I wait for 2 seconds
                And I enter password "<PASSWORD>"
                And I wait for 2 seconds
                And I click sing in
                And I wait for 2 seconds
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I save screenshot v444 "5" "2"
                And I enter new post title "Nuevo post"
                And I wait for 2 seconds
                And I enter new post body "body text post"
                And I wait for 2 seconds
                And I save screenshot v444 "5" "3"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 2 seconds
                And I save screenshot v444 "5" "4"
                And I click firts post 
                And I wait for 2 seconds
                And I save screenshot v444 "5" "5"
                And I click settings post
                And I wait for 2 seconds
                And I save screenshot v444 "5" "6"
                And I click delete post
                And I wait for 2 seconds
                And I save screenshot v444 "5" "7"
                And I click confirm delete post
                And I wait for 3 seconds
                And I save screenshot v444 "5" "8"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I save screenshot v444 "5" "9"
                And I wait for 3 seconds
    