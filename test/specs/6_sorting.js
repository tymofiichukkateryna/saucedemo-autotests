import LoginPage from '../pageobjects/login.page.js';

describe('TC-6', () => {
    it('should sort products by price low to high', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        
        await $('.product_sort_container').selectByAttribute('value', 'lohi');

        const priceElements = await $$('.inventory_item_price');
        const prices = [];
        
        for (const el of priceElements) {
            const text = await el.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sorted);
    });
});