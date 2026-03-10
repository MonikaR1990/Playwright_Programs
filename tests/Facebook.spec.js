import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://www.facebook.com/");

  await page.locator('[name="email"]').fill("monicaselas@gmail.com");

  await page.locator('[name="pass"]').fill("monica123");

  //await page.locator('[aria-label="Log in"]').click();

  await page.locator('role=button [aria-label="Log in"]').click();
});