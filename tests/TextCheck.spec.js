import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://vinothqaacademy.com/demo-page-healthcare/");

  const submitBtn = page.getByText("Submit");

  await expect(submitBtn).toHaveText("Submit");


  const pid = page.locator('#patient-id');

  await expect(pid).toHaveValue("12345");

});