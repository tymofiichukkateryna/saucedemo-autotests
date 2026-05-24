import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Footer links functionality', () => {

    beforeEach(async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });

    const links = [
        {
            element: () => inventoryPage.twitterLink,
            expected: 'twitter.com'
        },
        {
            element: () => inventoryPage.facebookLink,
            expected: 'facebook.com'
        },
        {
            element: () => inventoryPage.linkedinLink,
            expected: 'linkedin.com'
        }
    ];

    for (const link of links) {

        it(`should contain ${link.expected}`, async () => {

            const href =
                await (await link.element())
                    .getAttribute('href');

            expect(href)
                .toContain(link.expected);
        });
    }
});