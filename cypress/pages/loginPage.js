export class LoginPage {
 
    get alertMessage() {
        return cy.get("div.ng-binding.ng-scope.alert.alert-success");
    }

    validateRegistrationSuccessful() {
        cy.url().should('contains',"registration-login-example/#/login");
        this.alertMessage.contains("Registration successful");
    }
}