import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Cart functionality', () => {

    it('should increment cart badge', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        expect(
            await inventoryPage.getCartBadgeText()
        ).toBe('1');
    });
});