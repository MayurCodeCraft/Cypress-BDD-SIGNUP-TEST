class AccountCreationPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }
  
    fillOutAccountDetails(email, firstName, lastName, password) {
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="firstname"]').type(firstName);
      cy.get('input[name="lastname"]').type(lastName);
      cy.get('#password').type(password);
      cy.get('input[name="password_confirmation"]').type(password);
    }
  
    submitAccountCreation() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    accountCreatedMessage() {
      return cy.get('.message-success.success.message');
    
    }

    accountLogOut(){

      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
      cy.wait(4000)
    }
  }
  
  export default new AccountCreationPage();
  