import { browser } from '@wdio/globals';

export default class SaucedemoPage {

    async open(path = '') {

        await browser.url(
            `https://www.saucedemo.com/${path}`
        );
    }

    async getCurrentUrl() {
        return await browser.getUrl();
    }

    async getWindowHandles() {
        return await browser.getWindowHandles();
    }
}