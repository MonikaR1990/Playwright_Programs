Feature: User Registration

  As a new user
  I want to register on the My Account page
  So that I can access account features after login

  Scenario: Successful registration with unique email
    Given user launches browser
    And user navigates to my account page
    When user enters email and password
    Then user should be registered successfully
    And close the browser