const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../Pages/LoginPage');
const config = require('../support/config');
let loginPage;
Given('User launches the application', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigate(config.baseUrl);
    //timeout.setTimeout(3000);
    //await setTimeout(3000); // Wait for the page to load
});
When('User enter valid credentials', async function () {
  await loginPage.type(config.username, config.password);
}); 
When('User click the login button', async function () {
    await loginPage.clickLoginButton();
});
Then('User should be redirected to the home page', async function () {
    // Add assertions here to verify successful login
});
