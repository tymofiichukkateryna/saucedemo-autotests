import LoginPage from '../pageobjects/login.page.js';
describe('TC-1', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
    });
});