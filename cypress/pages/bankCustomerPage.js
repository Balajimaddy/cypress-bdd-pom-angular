export class BankCustomerPage {
    elements = {
        yourNameSelect: () => cy.get("#userSelect"),
        loginButton: () => cy.get("button").contains("Login")
    }

    selectYourName(name) {
        this.elements.yourNameSelect().select(name);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    loginAsCustomer(name) {
        this.selectYourName(name);
        this.clickLoginButton();
    }
}