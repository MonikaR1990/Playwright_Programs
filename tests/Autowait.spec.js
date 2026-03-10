//Playwright automatically wait
// Element is visible
// Element is enable
// Element is stable
// Element receive Element


import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://www.google.com/");

  await page.locator('[name="q"]').fill("Javascript");

  await page.locator('[value="Google Search"]').last().click();

  await page.type();

  await page.check();

  await page.uncheck();

  await page.hover();

  await page.press();

});


