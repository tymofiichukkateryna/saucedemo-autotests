import { browser } from '@wdio/globals'

export default class SaucedemoPage {
    async open(path = '') {
        return await browser.url(`https://www.saucedemo.com/${path}`);
    }
}