import SaucedemoPage from './page.js';

class LoginPage extends SaucedemoPage {

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    get errorContainer() {
        return $('[data-test="error"]');
    }

    async open() {

        await super.open('');
    }

    async login(username, password) {

        await this.inputUsername
            .setValue(username);

        await this.inputPassword
            .setValue(password);

        await this.btnSubmit.click();
    }

    async clickLoginButton() {

        await this.btnSubmit.click();
    }

    async getErrorText() {

        return await this.errorContainer.getText();
    }
}

const loginPage = new LoginPage();

export default loginPage;