import url from '../fixtures/url.json';

export class BankDepositPage {

    get DepositButton() {
        return cy.get("button").contains("Deposit");
    }

    get centerText() {
        return cy.get("div.center > strong");
    }

    get amountText() {
        return cy.get("[placeholder='amount']");
    }

    get submitDepositButton() {
        cy.get("[name=myForm] > button").contains("Deposit");
    }

    get alertMessage() {
        return cy.get("div.container-fluid.mainBox.ng-scope");
    }

    clickDepositButton() {
        this.depositButton.click();
    }

    enterAmountText(amount) {
        this.amountText.type(amount);
    }

    getBalanceValue() {
        cy.url().should("contains",url.bankinDeposit)
        this.centerText.eq(1).then(val => {
            const balanceValue = val.text();
            cy.wrap(balanceValue).as("balanceValue");
        })
    }

    submitDeposit() {
        this.submitDepositButton.click();
    }

    depositAmount(amount) {
        this.getBalanceValue();
        this.clickDepositButton();
        this.enterAmountText(amount);
        this.submitDeposit();
    }

    depositSucessful(amount) {
        this.alertMessage.contains("Deposit Successful");
        cy.get("@balanceValue").then(amountBefore => {
            this.getBalanceValue();
            cy.get("@balanceValue").then(amountAfter => {
                expect(parseInt(amountBefore) + 100).equals(parseInt(amountAfter));
            })
        })
    }

}