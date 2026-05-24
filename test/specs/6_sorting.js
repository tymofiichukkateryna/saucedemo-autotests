import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting functionality', () => {

    beforeEach(async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });

    const sortingOptions = [
        'az',
        'za',
        'lohi',
        'hilo'
    ];

    for (const option of sortingOptions) {

        it(`should sort correctly using ${option}`, async () => {

            await inventoryPage.sortBy(option);

            const prices =
                await inventoryPage.getPrices();

            if (option === 'lohi') {

                expect(prices)
                    .toEqual(
                        [...prices]
                            .sort((a, b) => a - b)
                    );
            }

            if (option === 'hilo') {

                expect(prices)
                    .toEqual(
                        [...prices]
                            .sort((a, b) => b - a)
                    );
            }
        });
    }
});