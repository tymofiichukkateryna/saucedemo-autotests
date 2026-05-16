import LoginPage from '../pageobjects/login.page.js';
describe('TC-3', () => {
    it('should show error for locked user', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText(expect.stringContaining('locked out'));
    });
});