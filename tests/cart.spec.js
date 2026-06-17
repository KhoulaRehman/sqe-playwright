const { test, expect } = require('@playwright/test');

test('Add 2 items to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});