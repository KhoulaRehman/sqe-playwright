const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('POM valid login', async ({ page }) => {
    const lp = new LoginPage(page);

    await lp.goto();
    await lp.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
});

test('POM invalid login', async ({ page }) => {
    const lp = new LoginPage(page);

    await lp.goto();
    await lp.login('standard_user', 'wrongpass');

    await expect(lp.error).toBeVisible();
});