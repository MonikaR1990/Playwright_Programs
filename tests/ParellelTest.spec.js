import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

// 🔥 SMOKE TESTS
test('Open Google homepage @smoke', async ({ page }) =>
{
  console.log('Smoke Test - Open Google');
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
});

test('Check title contains Google @smoke', async ({ page }) => 
{
  console.log('Smoke Test - Title Check');
  await page.goto('https://www.google.com/');
  const title = await page.title();
  expect(title).toContain('Google');
});


// ⚡ SANITY TESTS
test('Search Playwright @sanity', async ({ page }) => 
{
  console.log('Sanity Test - Search Playwright');
  await page.goto('https://www.google.com/');

  await page.fill('textarea[name="q"]', 'Playwright');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/search/);
});

test('Search Automation Testing @sanity', async ({ page }) => 
{
  console.log('Sanity Test - Search Automation');
  await page.goto('https://www.google.com/');

  await page.fill('textarea[name="q"]', 'Automation Testing');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/Playwright/);
});


// 🧪 REGRESSION TESTS
test('Multiple search flow @regression', async ({ page }) => {
  console.log('Regression Test - Multiple Search');

  await page.goto('https://www.google.com/');

  await page.fill('textarea[name="q"]', 'Playwright');
  await page.keyboard.press('Enter');

  await page.waitForLoadState('networkidle');

  // ✅ Reload instead of goBack
  await page.goto('https://www.google.com/');

  await page.fill('textarea[name="q"]', 'Selenium');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/search/);
});