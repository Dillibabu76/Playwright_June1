const BasePage = require('./BasePage');
class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }   
    async type(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }   
    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }
}
module.exports = LoginPage;