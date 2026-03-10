    import {test, expect} from '@playwright/test';
    
    test('test', async({page})=>{
      await page.goto("https://vinothqaacademy.com/demo-page-healthcare/");
        
      await page.locator('#patient-name').fill("Bala");
      //await page.locator('#patient-id').fill("3435354");

      await page.locator('input[value="male"]').click();
    
      await page.locator('input[value="fever"]').click();

      await page.getByText('Submit').click();

      await page.waitForTimeout(5000);


    });