export class BankCustomerPage {

    get yourNameSelect() {
        return cy.get("#userSelect");
    }

    get loginButton() {
        return cy.get("button").contains("Login");
    }

    selectYourName(name) {
        this.yourNameSelect.select(name);
    }

    clickLoginButton(){
        this.loginButton.click();
    }

    loginAsCustomer(name) {
        this.selectYourName(name);
        this.clickLoginButton();
    }
}