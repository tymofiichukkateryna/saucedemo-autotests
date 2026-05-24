import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout navigation', () => {

    it('should navigate to checkout step one', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        await cartPage.openCart();

        await cartPage.clickCheckout();

        expect(
            await checkoutPage.getCheckoutTitleText()
        ).toContain('Checkout');
    });
});