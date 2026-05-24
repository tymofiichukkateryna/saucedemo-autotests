import loginPage from '../pageobjects/login.page.js';

describe('Login functionality', () => {

    it('should show error for invalid password', async () => {

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'wrong_pass'
        );

        expect(
            await loginPage.getErrorText()
        ).toContain('do not match');
    });
});