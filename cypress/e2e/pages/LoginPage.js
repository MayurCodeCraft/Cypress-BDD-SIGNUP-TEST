class LoginPage {
    visit() {
      cy.wait(8000)
     cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
  
    fillOutLoginCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
     // cy.get('button[type="submit"]').click();
      cy.get('.action.login.primary').click()
    }
  
    loginErrorMessage() {
     // return cy.get('.error-msg');
      return  cy.get('.message-error > div')
    }
  
    userLoggedIn() {
 
         cy.contains('My Account') 

    }
  }
  
  export default new LoginPage();
  