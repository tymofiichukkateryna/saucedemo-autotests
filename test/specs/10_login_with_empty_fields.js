import LoginPage from '../pageobjects/login.page.js';
describe('TC-10', () => {
    it('should show error for empty fields', async () => {
        await LoginPage.open();
        await LoginPage.btnSubmit.click();
        await expect(LoginPage.errorContainer).toHaveText(expect.stringContaining('Username is required'));
    });
});