export class RegistrationPage {

    get firstNameText() {
        return cy.get("#firstName");
    }

    get lastNameText() {
        return cy.get("#Text1");
    }

    get userNameText() {
        return cy.get("#username");
    }

    get passwordText() {
        return cy.get("#password");
    }

    get registerButton() {
        return cy.get("button").contains("Register");
    }

    typeFirstName(firstName) {
        this.firstNameText.type(firstName)
    } 

    typeLastName(lastName) { 
        this.lastNameText.type(lastName)
    }

    typeUserName(userName) {
        this.userNameText.type(userName)
    }

    typePassword(password) {
        this.passwordText.type(password)
    }

    clickRegisterButton() {
        this.registerButton.click()
    }

    submitLogin(firstName,lastName,userName,password) {
        this.typeFirstName(firstName)
        this.typeLastName(lastName)
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickRegisterButton()
    }
}