Feature: Sign In

    Verify that user successfully sign in
    Scenario: Sign In
        Given Launch app in browser
        When Click Sign In
        # Then Enter Email and Password then click Sign In Button
        # Then Click Sign Out

        Examples:
            | TestID      | URL        |
            | TC10        | /index.php |
