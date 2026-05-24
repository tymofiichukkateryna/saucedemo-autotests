import loginPage from '../pageobjects/login.page.js';
import menuPage from '../pageobjects/menu.page.js';

describe('Logout functionality', () => {

    it('should logout successfully', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await menuPage.logout();

        await expect(
            loginPage.inputUsername
        ).toHaveValue('');
    });
});