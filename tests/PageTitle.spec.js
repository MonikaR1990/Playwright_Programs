//Assertion

import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://www.facebook.com/");

  await expect(page).toHaveTitle("Facebook");

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await expect(page).toHaveTitle("OrangeHRM");
});
