import LoginPage from '../pageobjects/login.page.js';
describe('TC-14', () => {
    it('should increment cart badge', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $$('.btn_inventory')[0].click();
        await expect($('.shopping_cart_badge')).toHaveText('1');
    });
});