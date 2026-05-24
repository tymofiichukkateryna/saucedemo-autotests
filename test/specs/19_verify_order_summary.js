import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Order summary functionality', () => {

    it('should show positive total price', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        await cartPage.openCart();

        await cartPage.clickCheckout();

        await checkoutPage.fillCheckoutInfo(
            'K',
            'Q',
            '12345'
        );

        await checkoutPage.continueCheckout();

        const total =
            await checkoutPage.getTotalPriceText();

        expect(
            parseFloat(
                total.replace('Total: $', '')
            )
        ).toBeGreaterThan(0);
    });
});