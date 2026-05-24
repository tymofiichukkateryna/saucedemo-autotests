import SaucedemoPage from './page.js';

class CheckoutPage extends SaucedemoPage {

    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    get finishButton() {
        return $('#finish');
    }

    get completeHeader() {
        return $('.complete-header');
    }

    get checkoutTitle() {
        return $('.title');
    }

    get totalLabel() {
        return $('.summary_total_label');
    }

    async fillCheckoutInfo(
        firstName,
        lastName,
        postalCode
    ) {

        await this.firstNameInput
            .setValue(firstName);

        await this.lastNameInput
            .setValue(lastName);

        await this.postalCodeInput
            .setValue(postalCode);
    }

    async continueCheckout() {

        await this.continueButton.click();
    }

    async finishCheckout() {

        await this.finishButton.click();
    }

    async getCompleteHeaderText() {

        return await this.completeHeader.getText();
    }

    async getCheckoutTitleText() {

        return await this.checkoutTitle.getText();
    }

    async getTotalPriceText() {

        return await this.totalLabel.getText();
    }
}

const checkoutPage = new CheckoutPage();

export default checkoutPage;