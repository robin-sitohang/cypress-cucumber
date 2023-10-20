class LoginPage {
    enterURL() {
        cy.visit("https://liberta-stg.thelionparcel.com");
        
    }
    validateText() {
        cy.contains('Content Management System');
    }
    inputEmail() {
        cy.get('#input-component-auth-email', { timeout: 10000 }).should('be.visible');
        cy.get('#input-component-auth-email')
            .type('emailinvalid@mail.com')
    }
    inputPassword() {
        cy.get('#input-component-auth-password', { timeout: 10000 }).should('be.visible');
        cy.get('#input-component-auth-password')
        .type('Testing123')
    }
    clickLoginButton() {
        cy.get("button[type='submit']", { timeout: 10000 }).should('be.visible');
        cy.get("button[type='submit']").click()
    }
    validateErrorLogin() {
        cy.contains('Wrong username or password');  
    }
}
    const loginpage = new LoginPage();
    export default loginpage;
