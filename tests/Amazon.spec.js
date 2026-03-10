import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://www.amazon.in/");
t
  //await page.locator('text = Sign').click();

  await page.locator('role=button#nav-global-location-popover-link').click();
});

