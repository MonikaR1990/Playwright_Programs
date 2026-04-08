import { test } from '@playwright/test';

test('Video Recording Example', async ({ page }) => 
    {

    await page.goto('https://letcode.in');

    await page.waitForTimeout(2000);

    await page.click("text=Work-Space");

    await page.waitForTimeout(2000);

    await page.goBack();

});

test('Video Example - Failure Case', async ({ page }) => {

  await page.goto('https://letcode.in');

  // Intentionally wrong title to FAIL the test
  await expect(page).toHaveTitle('Wrong Title');

});