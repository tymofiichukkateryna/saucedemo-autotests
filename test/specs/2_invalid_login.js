import LoginPage from '../pageobjects/login.page.js';
describe('TC-2', () => {
    it('should show error for invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'wrong_pass');
        await expect(LoginPage.errorContainer).toHaveText(expect.stringContaining('do not match'));
    });
});