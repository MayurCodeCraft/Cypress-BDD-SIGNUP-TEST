import AccountCreationPage from '../pages/AccountCreationPage';
import LoginPage from '../pages/LoginPage';

//import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
import { Given,When,Then} from "cypress-cucumber-preprocessor/steps";

let userCredentials = {};


Given('I visit the account creation page', () => {
  AccountCreationPage.visit();
});

When('I fill in the account creation details with valid information', () => {
  const email = `user${Date.now()}@example.com`; 
  const firstName = 'Mani';
  const lastName = 'Dius';
  const password = 'Max@1234';

  userCredentials.email = email;
  userCredentials.password = password;

  AccountCreationPage.fillOutAccountDetails(email, firstName, lastName, password);
});

When('I submit the account creation form', () => {
  AccountCreationPage.submitAccountCreation();
});

And('I should see a successful account creation message', () => {
  cy.wait(2000)
  AccountCreationPage.accountCreatedMessage().should('contain', 'Thank you for registering with Main Website Store');
});

Then('I should log out successfully',()=>{
    cy.wait(2000)
    AccountCreationPage.accountLogOut()
})

When('I visit the login page', () => {
  LoginPage.visit();
});

When('I fill in the login credentials with valid information', () => {
  const email = `user${Date.now()}@example.com`;
  const password = 'Max@1234';
  LoginPage.fillOutLoginCredentials(userCredentials.email, userCredentials.password);
});

When('I submit the login form', () => {
  LoginPage.submitLogin();
});

Then('I should be logged in successfully', () => {
  LoginPage.userLoggedIn();
});

When('I fill in the login credentials with invalid information', () => {
  LoginPage.fillOutLoginCredentials('invaliduser@example.com', 'WrongPassword');
});

Then('I should see an error message', () => {
  LoginPage.loginErrorMessage().should('contain', 'he account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
});
