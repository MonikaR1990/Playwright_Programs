import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://vinothqaacademy.com/");

  await page.getByRole('link', {name: 'Tutorials'}).first().click();

  await page.waitForLoadState('load');

  await expect(page).toHaveTitle('Tutorials – Vinoth Tech Solutions');

  //LoadState
  //load ==> Page + resources(image, css) loaded
  //documentloaded ==> HTML DOM is loaded
  //networkidle ==> no network request for 500ms

 
 
});
