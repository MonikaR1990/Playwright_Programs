import {test, expect} from '@playwright/test'

test('Navigation Time', async({page})=>{
   
    await page.goto("https://www.saucedemo.com/");

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    const startTime = Date.now();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await page.locator('.shopping_cart_link').click();

    await page.locator('#checkout').click();

    const endTime = Date.now();

    const navigationTime = endTime-startTime;

    console.log(`Namvigation Time: ${navigationTime} ms`);

    expect(navigationTime).toBeLessThan(500);




})