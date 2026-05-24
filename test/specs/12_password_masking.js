import loginPage from '../pageobjects/login.page.js';

describe('Login form functionality', () => {

    it('should mask password field', async () => {

        await loginPage.open();

        await expect(
            loginPage.inputPassword
        ).toHaveAttribute(
            'type',
            'password'
        );
    });
});