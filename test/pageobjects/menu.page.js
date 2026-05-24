import SaucedemoPage from './page.js';

class MenuPage extends SaucedemoPage {

    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    async logout() {

        await this.burgerMenuButton.click();

        await this.logoutLink.waitForDisplayed();

        await this.logoutLink.click();
    }
}

const menuPage = new MenuPage();

export default menuPage;