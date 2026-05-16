import LoginPage from '../pageobjects/login.page.js';
describe('TC-17', () => {
    it('should navigate to checkout step one', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await expect($('.title')).toHaveText('Checkout: Your Information');
    });
});