import LoginPage from '../pageobjects/login.page.js';
describe('TC-13', () => {
    it('should have correct currency format', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        const prices = await $$('.inventory_item_price');
        for (const price of prices) {
            await expect(await price.getText()).toMatch(/^\$\d+\.\d{2}$/);
        }
    });
});