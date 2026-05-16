import LoginPage from '../pageobjects/login.page.js';
describe('TC-12', () => {
    it('should mask the password field', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');
    });
});