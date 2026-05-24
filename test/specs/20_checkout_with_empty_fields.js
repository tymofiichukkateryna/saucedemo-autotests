import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout validation', () => {

    it('should show error for empty checkout fields', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        await cartPage.openCart();

        await cartPage.clickCheckout();

        await checkoutPage.continueCheckout();

        expect(
            await loginPage.getErrorText()
        ).toContain('Error');
    });
});