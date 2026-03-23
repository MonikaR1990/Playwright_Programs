import { test, expect } from '@playwright/test';

test('Select Date in DatePicker2', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //await page.locator('#datepicker').fill("02/02/2022");

  await page.click('#txtDate');



  await page.selectOption('.ui-datepicker-month', '1');

  await page.selectOption('.ui-datepicker-year', '2022');

  await page.click('[data-date="2"]');

   await page.waitForTimeout(5000);



  
});