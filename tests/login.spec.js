const { test, expect } = require('@playwright/test');

test('Login valid user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
});


test('Login invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrongpass');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
});