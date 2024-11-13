Feature: Account Creation and Login on Magento Website

  Scenario: Create a new account on magento website and login
    Given I visit the account creation page
    When I fill in the account creation details with valid information
    And I submit the account creation form
    And I should see a successful account creation message
    Then I should log out successfully
    When I visit the login page
    And I fill in the login credentials with valid information
    And I submit the login form
    Then I should be logged in successfully

 

  Scenario: Attempt to login with invalid credentials
    Given I visit the login page
    When I fill in the login credentials with invalid information
    And I submit the login form
    Then I should see an error message
