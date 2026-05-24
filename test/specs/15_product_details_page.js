import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Product details functionality', () => {

    it('should open product details page and go back', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage.openFirstProduct();

        await inventoryPage.goBackToProducts();

        expect(
            await inventoryPage.getTitleText()
        ).toContain('Products');
    });
});