export class RegistrationPage {
    elements = {
        firstNameText: () => cy.get("#firstName"),
        lastNameText: () => cy.get("#Text1"),
        userNameText: () => cy.get("#username"),
        passwordText: () => cy.get("#password"),
        registerButton: () => cy.get("button").contains("Register")
    }

    typeFirstName(firstName) {
        this.elements.firstNameText().type(firstName)
    } 

    typeLastName(lastName) { 
        this.elements.lastNameText().type(lastName)
    }

    typeUserName(userName) {
        this.elements.userNameText().type(userName)
    }

    typePassword(password) {
        this.elements.passwordText().type(password)
    }

    clickRegisterButton() {
        this.elements.registerButton().click()
    }

    submitLogin(firstName,lastName,userName,password) {
        this.typeFirstName(firstName)
        this.typeLastName(lastName)
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickRegisterButton()
    }
}