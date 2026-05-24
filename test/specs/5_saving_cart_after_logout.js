import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import menuPage from '../pageobjects/menu.page.js';

describe('Cart persistence functionality', () => {

    it('should keep item in cart after relogin', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        await menuPage.logout();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        expect(
            await inventoryPage.getCartBadgeText()
        ).toBe('1');
    });
});