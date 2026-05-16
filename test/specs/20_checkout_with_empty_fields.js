import LoginPage from '../pageobjects/login.page.js';
describe('TC-20', () => {
    it('should show error for empty checkout fields', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#continue').click();
        await expect($('[data-test="error"]')).toBeDisplayed();
    });
});