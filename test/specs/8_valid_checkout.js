import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout functionality', () => {

    it('should complete valid checkout', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage
            .addFirstItemToCart();

        await cartPage.openCart();

        await cartPage.clickCheckout();

        await checkoutPage.fillCheckoutInfo(
            'Kateryna',
            'QA',
            '12345'
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();

        expect(
            await checkoutPage
                .getCompleteHeaderText()
        ).toContain('Thank you');
    });
});