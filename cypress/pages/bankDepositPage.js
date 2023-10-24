import url from '../fixtures/url.json';

export class BankDepositPage {
    elements = {
        depositButton: () => cy.get("button").contains("Deposit"),
        centerText: () => cy.get("div.center > strong"),
        amountText: () => cy.get("[placeholder='amount']"),
        submitDepositButton: () => cy.get("[name=myForm] > button").contains("Deposit"),
        alertMessage: () => cy.get("div.container-fluid.mainBox.ng-scope")
    }

    clickDepositButton() {
        this.elements.depositButton().click();
    }

    enterAmountText(amount) {
        this.elements.amountText().type(amount);
    }

    getBalanceValue() {
        cy.url().should("contains",url.bankinDeposit)
        this.elements.centerText().eq(1).then(val => {
            const balanceValue = val.text();
            cy.wrap(balanceValue).as("balanceValue");
        })
    }

    submitDeposit() {
        this.elements.submitDepositButton().click();
    }

    depositAmount(amount) {
        this.getBalanceValue();
        this.clickDepositButton();
        this.enterAmountText(amount);
        this.submitDeposit();
    }

    depositSucessful(amount) {
        this.elements.alertMessage().contains("Deposit Successful");
        cy.get("@balanceValue").then(amountBefore => {
            this.getBalanceValue();
            cy.get("@balanceValue").then(amountAfter => {
                expect(parseInt(amountBefore) + 100).equals(parseInt(amountAfter));
            })
        })
    }

}