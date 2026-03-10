//Assertion

import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  //await page.goto("https://www.amazon.in/");

  //const amazonlogo = page.locator('#nav-logo-sprites');

  //await expect(amazonlogo).toBeVisible();

  await page.goto("https://www.facebook.com/");

 const createAccountBtn = page.getByTestId('open-registration-form-button');
 await expect(createAccountBtn).toBeVisible();

 const createAccountBtn1 = page.getByRole('link',{name:'Create new account'});

 await expect(createAccountBtn1).toBeVisible();
 await page.waitForTimeout(2000);
});
