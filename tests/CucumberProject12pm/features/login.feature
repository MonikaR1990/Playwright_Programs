Feature: Login Functionality

Scenario: Verify that user able to login successful
  Given user navigates to the login page
  And user enters username and password
  When user clicks the Login button
  Then user should be navigated to the accounts overview page