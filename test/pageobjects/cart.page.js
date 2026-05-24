import SaucedemoPage from './page.js';

class CartPage extends SaucedemoPage {

    get cartLink() {
        return $('.shopping_cart_link');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    async openCart() {

        await this.cartLink.click();
    }

    async clickCheckout() {

        await this.checkoutButton.click();
    }
}

const cartPage = new CartPage();

export default cartPage;