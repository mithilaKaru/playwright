const { test, expect } = require('@playwright/test');

test('Login test on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.click('#item_4_title_link');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
  await page.click('#add-to-cart');
  await page.click('#shopping_cart_container');
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');


});
