export class LoginPage {
    elements = {
        alertMessage: () => cy.get("div.ng-binding.ng-scope.alert.alert-success"),
    }

    validateRegistrationSuccessful() {
        cy.url().should('contains',"registration-login-example/#/login")
        this.elements.alertMessage().contains("Registration successful")
    }
}