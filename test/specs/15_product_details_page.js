import LoginPage from '../pageobjects/login.page.js';
describe('TC-15', () => {
    it('should open product details and go back', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.inventory_item_name').click();
        await $('#back-to-products').click();
        await expect($('.title')).toHaveText('Products');
    });
});