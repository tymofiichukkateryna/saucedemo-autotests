import LoginPage from '../pageobjects/login.page.js';
describe('TC-7', () => {
    it('should open Twitter in a new tab', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await $('.social_twitter a').click();
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
        await expect(browser).toHaveUrl(expect.stringContaining('x.com'));
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });
});