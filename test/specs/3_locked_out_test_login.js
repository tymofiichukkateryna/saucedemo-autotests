import loginPage from '../pageobjects/login.page.js';

describe('Login functionality', () => {

    it('should show error for locked user', async () => {

        await loginPage.open();

        await loginPage.login(
            'locked_out_user',
            'secret_sauce'
        );

        expect(
            await loginPage.getErrorText()
        ).toContain('locked out');
    });
});