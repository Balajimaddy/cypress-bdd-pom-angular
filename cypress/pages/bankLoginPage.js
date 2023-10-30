export class BankLoginPage {

    get customerLoginButton() {
        return cy.get("button").contains("Customer Login");
    }

    clickCustomerLoginButton() {
        this.customerLoginButton.click();
    }

    bankLogin(loginType) {
        if(loginType.toLowerCase() === "customer") {
            this.clickCustomerLoginButton();
        }
    }
}