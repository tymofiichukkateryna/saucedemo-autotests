import LoginPage from '../pageobjects/login.page.js';
describe('TC-11', () => {
    it('should allow typing in username field', async () => {
        await LoginPage.open();
        await LoginPage.inputUsername.setValue('test');
        await expect(LoginPage.inputUsername).toHaveValue('test');
    });
});