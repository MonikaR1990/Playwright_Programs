//Assertion

import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://www.wikipedia.org/");

  const language = page.locator('.central-featured-lang');

  await expect(language).toHaveCount(9);
});
