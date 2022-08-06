Feature: Account Maintenance

    Verify that user successfully created a new account
    Scenario: Create Account
        Given Launch app in browser
        When Click Sign In
      #  Then Fill up mandatory field then click registered button
      #  Then Click Sign Out

        Examples:
            | TestID      | Email                         | Password    | URL        |
            | TC03        | johnrenzo.aguila@gmail.com    | Agu!l@61594 | /index.php |
