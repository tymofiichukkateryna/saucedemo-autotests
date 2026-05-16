import LoginPage from '../pageobjects/login.page.js';
describe('TC-16', () => {
    it('should toggle button text', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        const btn = $('.btn_inventory');
        await btn.click();
        await expect(btn).toHaveText('Remove');
    });
});