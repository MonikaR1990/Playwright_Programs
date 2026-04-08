import { test } from '@playwright/test';

test('Take Full Page Screenshot', async ({ page }) => {

    await page.goto('https://letcode.in');

    // Full page screenshot
    await page.screenshot({
        path: 'E://fullpage.png',
        fullPage: true
    });

});

test('Particular Element', async ({ page }) => {

    await page.goto('https://letcode.in/button');

    const button = page.locator('#home');

    await button.screenshot(
        {path:'E://button.png' })

    });

test('Screenshot with timestamp', async ({ page }) => 
{

    await page.goto('https://letcode.in');

   const time = Date.now();

   const date = new Date(time);

   console.log(date)

    await page.screenshot({
        path: `screenshots/homepage_${time}.png`,
        fullPage: true
    });

});







