import loginPage from '../pageobjects/login.page.js';

describe('Login validation', () => {

    it('should show error for empty login fields', async () => {

        await loginPage.open();

        await loginPage.clickLoginButton();

        expect(
            await loginPage.getErrorText()
        ).toContain('Username is required');
    });
});