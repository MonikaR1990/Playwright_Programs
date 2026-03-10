//Assertion

import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://vinothqaacademy.com/demo-page-healthcare/");

  //const pname = page.locator('#patient-name');

  const pid = page.locator('#patient-id');

  await expect(pid).toBeEnabled();

});
