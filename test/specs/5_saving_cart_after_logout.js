import LoginPage from '../pageobjects/login.page.js';
describe('TC-5', () => {
    it('should keep item in cart after relogin', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.btn_inventory').click();
        await $('#react-burger-menu-btn').click();
        await $('#logout_sidebar_link').waitForDisplayed();
        await $('#logout_sidebar_link').click();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect($('.shopping_cart_badge')).toHaveText('1');
    });
});