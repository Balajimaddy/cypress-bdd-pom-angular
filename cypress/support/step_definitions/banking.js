import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BankLoginPage  } from "../../pages/bankLoginPage";
import { BankCustomerPage } from "../../pages/bankCustomerPage";
import { BankDepositPage } from "../../pages/bankDepositPage";
const bankLoginPage = new BankLoginPage();
const bankCustomerPage = new BankCustomerPage();
const bankDepositPage = new BankDepositPage();

Given("I login as {string} {string}", (loginType, name) => {
    bankLoginPage.bankLogin(loginType);
    bankCustomerPage.loginAsCustomer(name);
});

When("I deposit {string} amount", (depositAmount) => {
    bankDepositPage.depositAmount(depositAmount);
})

Then("I validate the amount {string} is credited Successfully", (amount) => {
    bankDepositPage.depositSucessful(amount);
})
