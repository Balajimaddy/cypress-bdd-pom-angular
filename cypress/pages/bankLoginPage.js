export class BankLoginPage {
    elements = {
        customerLoginButton: () => cy.get("button").contains("Customer Login"),
    }

    clickCustomerLoginButton() {
        this.elements.customerLoginButton().click();
    }

    bankLogin(loginType) {
        if(loginType.toLowerCase() === "customer") {
            this.clickCustomerLoginButton();
        }
    }
}