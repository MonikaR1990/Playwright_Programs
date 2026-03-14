 
 import {test, expect} from '@playwright/test';

test('File Upload Example', async ({ page }) => {

    await page.goto('https://letcode.in/file');

    // Upload file
    await page.setInputFiles('.file-input', 'F:\\data.txt');

    await page.waitForTimeout(3000);

});