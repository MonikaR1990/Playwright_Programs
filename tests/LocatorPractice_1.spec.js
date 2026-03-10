    import {test, expect} from '@playwright/test';
    
    test('test', async({page})=>{
      await page.goto("https://automationexercise.com/login");
    
      await page.locator('[data-qa="login-email"]').fill("monicaselas2010@gmail.com");
    
      await page.locator('[placeholder="Password"]').fill("MonikaR1790");

      await page.locator('[data-qa="login-button"]').click();

    });
    
    