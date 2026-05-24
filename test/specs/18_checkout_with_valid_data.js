import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout form functionality', () => {

    it('should proceed with valid checkout information', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        await cartPage.openCart();

        await cartPage.clickCheckout();

        await checkoutPage.fillCheckoutInfo(
            'Kateryna',
            'QA',
            '58000'
        );

        await checkoutPage.continueCheckout();

        await expect(browser)
            .toHaveUrl(
                expect.stringContaining(
                    '/checkout-step-two.html'
                )
            );
    });
});