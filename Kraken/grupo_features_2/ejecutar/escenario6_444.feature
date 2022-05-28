Feature: Login, list post, and filter post 
        @user4 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts
                Given I navigate to page "<LOGINPAGE44>"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "1"
                When I enter email "<USERNAME>"
                And I wait for 2 seconds
                And I enter password "<PASSWORD>"
                And I wait for 2 seconds
                And I click sing in
                And I wait for 2 seconds
                And I save screenshot v444 "4" "2"
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I save screenshot v444 "4" "3"
                And I enter new post title "Post One"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "3"
                And I enter new post body "body text post"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "4"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 3 seconds
                And I save screenshot v444 "4" "5"
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I enter new post title "Post Two"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "6"
                And I enter new post body "body text post"
                And I wait for 1 seconds
                And I save screenshot v444 "4" "7"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 3 seconds
                Then I navigate to page "<NEWPOSTPAGE44>"
                And I enter new post title "Post Threeeeeeeeee"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "8"
                And I enter new post body "body text post"
                And I wait for 2 seconds
                And I save screenshot v444 "4" "9"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 3 seconds
                And I click firts post to edit
                And I wait for 2 seconds
                And I save screenshot v444 "4" "10"
                And I enter new post title "Post Three"
                And I wait for 2 seconds
                And I click publish post
                And I wait for 3 seconds
                And I save screenshot v444 "4" "11"
                And I click confirm publish post
                And I wait for 3 seconds
                And I save screenshot v444 "4" "12"
                And I click confirm publish post
                And I wait for 3 seconds
                And I save screenshot v444 "4" "13"
                Then I navigate to page "<LISTPOSTPAGE44>"
                And I wait for 3 seconds
                And I click list all post
                And I wait for 3 seconds
                And I click filter publish post
                And I save screenshot v444 "4" "14"
                And I wait for 4 seconds
    