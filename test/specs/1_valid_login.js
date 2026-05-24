import loginPage from '../pageobjects/login.page.js';

describe('Login functionality', () => {

    it('should login with valid credentials', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(browser)
            .toHaveUrl(
                expect.stringContaining('/inventory.html')
            );
    });
});