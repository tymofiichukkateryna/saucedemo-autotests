import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Inventory prices', () => {

    it('should display correct currency format', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        const prices =
            await inventoryPage.getPriceTexts();

        for (const price of prices) {

            expect(price)
                .toMatch(/^\$\d+\.\d{2}$/);
        }
    });
});