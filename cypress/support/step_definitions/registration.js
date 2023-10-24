import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { RegistrationPage } from "../../pages/registrationPage";
import { LoginPage } from "../../pages/loginPage";
const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

When("I submit Registration details", () => {
  registrationPage.submitLogin("first","last","testUserName","testPassword");
});

Then("I validate Registration is Successful", () => {
  loginPage.validateRegistrationSuccessful();
})