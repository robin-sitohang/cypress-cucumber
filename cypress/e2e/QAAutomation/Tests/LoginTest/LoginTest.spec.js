import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../Pages/LoginPage/LoginPage.spec";
beforeEach(() => {
cy.viewport(1600, 720);
});
Given("User navigate to the Website", () => {
    loginPage.enterURL();
});
Then("User on liberta login form", () => {
    loginPage.validateText();
});
Then("User input invalid email", () => {
    loginPage.inputEmail();
    });
Then("User input invalid password", () => {
    loginPage.inputPassword();
    });
Then("User click login button", () => {
    loginPage.clickLoginButton();
    });
Then("User get error wrong username or password", () => {
    loginPage.validateErrorLogin();
    });
