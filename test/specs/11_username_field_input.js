import loginPage from '../pageobjects/login.page.js';

describe('Login form functionality', () => {

    it('should allow typing in username field', async () => {

        await loginPage.open();

        await loginPage.inputUsername
            .setValue('test');

        await expect(
            loginPage.inputUsername
        ).toHaveValue('test');
    });
});