import SaucedemoPage from './page.js';

class InventoryPage extends SaucedemoPage {

    get sortDropdown() {
        return $('.product_sort_container');
    }

    get itemPrices() {
        return $$('.inventory_item_price');
    }

    get twitterLink() {
        return $('.social_twitter a');
    }

    get facebookLink() {
        return $('.social_facebook a');
    }

    get linkedinLink() {
        return $('.social_linkedin a');
    }

    get addToCartButtons() {
        return $$('.btn_inventory');
    }

    get cartBadge() {
        return $('.shopping_cart_badge');
    }

    get firstProduct() {
        return $('.inventory_item_name');
    }

    get backToProductsButton() {
        return $('#back-to-products');
    }

    get pageTitle() {
        return $('.title');
    }

    async sortBy(value) {

        await this.sortDropdown
            .selectByAttribute('value', value);
    }

    async getPrices() {

        const prices = [];

        for (const item of await this.itemPrices) {

            const text = await item.getText();

            prices.push(
                parseFloat(text.replace('$', ''))
            );
        }

        return prices;
    }

    async openFooterLink(link) {

        await link.click();

        await browser.waitUntil(
            async () =>
                (await browser.getWindowHandles()).length > 1
        );

        const handles =
            await browser.getWindowHandles();

        await browser.switchToWindow(handles[1]);

        return await browser.getUrl();
    }

    async addFirstItemToCart() {

        await this.addToCartButtons[0].click();
    }

    async getCartBadgeText() {

        return await this.cartBadge.getText();
    }

    async openFirstProduct() {

        await this.firstProduct.click();
    }

    async goBackToProducts() {

        await this.backToProductsButton.click();
    }

    async getTitleText() {

        return await this.pageTitle.getText();
    }

    async getPriceTexts() {

        const priceTexts = [];

        for (const item of await this.itemPrices) {

            priceTexts.push(
                await item.getText()
            );
        }

        return priceTexts;
    }

    async getFirstButtonText() {

        return await this.addToCartButtons[0]
            .getText();
    }
}

const inventoryPage = new InventoryPage();

export default inventoryPage;