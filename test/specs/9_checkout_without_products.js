import LoginPage from '../pageobjects/login.page.js';
describe('TC-9', () => {
    it('should not allow checkout with empty cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await expect(browser).toHaveUrl(expect.stringContaining('/cart.html'));
    });
});