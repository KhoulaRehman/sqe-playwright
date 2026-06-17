const { test, expect } = require('@playwright/test');

test('Sort low to high', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.selectOption('.product_sort_container', 'lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();

    const first = parseFloat(prices[0].replace('$', ''));
    const last = parseFloat(prices[prices.length - 1].replace('$', ''));

    expect(first).toBeLessThan(last);
});