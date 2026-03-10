import { test, expect } from '@playwright/test';

test('waitForRequest products', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  const requestPromise = page.waitForRequest(request=>request.url().includes('products'));
   
  await page.locator('[href="/products"]').click();


  const request = await requestPromise;

  console.log("Request URL: ", request.url());


});