import LoginPage from '../pageobjects/login.page.js';
describe('TC-8', () => {
    it('should complete a valid checkout', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.btn_inventory').click();
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#first-name').setValue('Kateryna');
        await $('#last-name').setValue('QA');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();
        await $('#finish').click();
        await expect($('.complete-header')).toHaveText('Thank you for your order!');
    });
});