Feature: Register Functionality

Scenario: Verify that user can register successfully
  Given user navigates to the register page
  And user enters registration details
  When user clicks the Register button
  Then user should see registration successful message