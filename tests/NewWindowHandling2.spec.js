import { test } from '@playwright/test';


test('Handling New Window', async ({ page }) => {

    await page.goto('https://letcode.in/window');

const [newPage] = await Promise.all([
        page.waitForEvent('popup'), // listener ready
         page.locator('#home').click() // action triggers popup
    ]);
    await page.waitForTimeout(2000)
    console.log(await newPage.title());
    await newPage.getByText("Work-Space").click();
  
});

