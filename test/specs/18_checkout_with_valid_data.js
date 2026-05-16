import LoginPage from '../pageobjects/login.page.js';
describe('TC-18', () => {
    it('should proceed with valid info', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#first-name').setValue('Kateryna');
        await $('#last-name').setValue('QA');
        await $('#postal-code').setValue('58000');
        await $('#continue').click();
        await expect(browser).toHaveUrl(expect.stringContaining('/checkout-step-two.html'));
    });
});