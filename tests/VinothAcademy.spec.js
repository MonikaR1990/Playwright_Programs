import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://vinothqaacademy.com/demo-site/");

await page.locator('#vfb-5').fill('Narmatha');
await page.locator('#vfb-7').fill('R');
await page.locator('#vfb-31-2').click();

await page.locator('#vfb-14').fill('narmatha@gmail.com');

await page.waitForTimeout(2000);

await page.locator('vfb-3').fill("33");

await page.locator('[name="vfb-submit"]').click();

await page.locator('role=option [text=00]').click();

await page.locator('select#vfb-13-country option[value="Albania"]').click();


});

