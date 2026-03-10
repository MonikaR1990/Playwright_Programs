import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");

  await page.locator('button[type="submit"]').click();

  //await page.waitForSelector('.oxd-topbar-header-breadcrumb');

 //await page.waitForURL('**/dashboard/index');
 
    //await expect(page).toHaveURL(/dashboard/);

    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();

});
