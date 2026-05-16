import LoginPage from '../pageobjects/login.page.js';
describe('TC-19', () => {
    it('should show positive total price', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.btn_inventory').click();
        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#first-name').setValue('K'); await $('#last-name').setValue('Q'); await $('#postal-code').setValue('0');
        await $('#continue').click();
        const total = await $('.summary_total_label').getText();
        expect(parseFloat(total.replace('Total: $', ''))).toBeGreaterThan(0);
    });
});