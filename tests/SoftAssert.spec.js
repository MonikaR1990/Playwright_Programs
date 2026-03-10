import { test, expect } from '@playwright/test';

test('Soft assertion example', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/demo-site/');

  const results = [];

  // Soft assertion 1
  try {
    await expect(page.locator('h3').first()).toHaveText('Registration Form');
  } catch (error) {
    results.push('Heading text failed');
  }

  // Soft assertion 2
  try {
    await expect(page.locator('.copyright_text')).toContainText('V-Tech');
  } catch (error) {
    results.push('Footer text failed');
  }

  // Soft assertion 3
  try {
    const firstName = page.locator('input#vfb-5');
    await expect(firstName).toBeVisible();
  } catch (error) {
    results.push('First Name input not visible');
  }

  // Final check: report soft assertion failures
  if (results.length > 0) {
    console.log('Soft assertion failures:', results);
  }
});