import loginPage from '../pageobjects/login.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Checkout validation', () => {

    it('should NOT allow checkout with empty cart', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await cartPage.openCart();

        await cartPage.clickCheckout();

        await expect(browser)
            .toHaveUrl(
                expect.stringContaining('/cart.html')
            );
    });
});