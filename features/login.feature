Feature: Login Functionality

  Scenario: Login with valid credentials
    Given User launches the application
    When User enter valid credentials
    And User click the login button
    Then User should be redirected to the home page


