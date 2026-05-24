import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Cart button functionality', () => {

    it('should change button text to Remove', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.addFirstItemToCart();

        expect(
            await inventoryPage.getFirstButtonText()
        ).toBe('Remove');
    });
});