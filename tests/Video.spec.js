import { test, expect } from '@playwright/test';

test('Video Recording Example', async ({ page }) => {

    await page.goto('https://letcode.in');

    await page.waitForTimeout(2000);

    await page.click("text=Work-Space");

    await page.waitForTimeout(2000);

    await page.goBack();

});