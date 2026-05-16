import LoginPage from '../pageobjects/login.page.js';
describe('TC-4', () => {
    it('should logout and clear input fields', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('#react-burger-menu-btn').click();
        await $('#logout_sidebar_link').waitForDisplayed();
        await $('#logout_sidebar_link').click();
        await expect(LoginPage.inputUsername).toHaveValue('');
    });
});