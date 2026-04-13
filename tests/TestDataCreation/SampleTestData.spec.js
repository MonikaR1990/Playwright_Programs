import {test, expect} from '@playwright/test'

test('Sample Test Data Creation', async({page})=>{
   
    for(let i = 1; i<=10; i++)
    {

    const email = `users${Date.now()}@gmail.com`; //user13444535@gmail.com
    const name = `User${Math.floor(Math.random() * 10000)}` //User3578

    await page.goto("https://automationexercise.com/login");

    await page.locator('[data-qa="signup-name"]').fill(name);
    await page.locator('[data-qa="signup-email"]').fill(email);

     await page.locator('[data-qa="signup-button"]').click();

     console.log(name);
     console.log(email);
    }
})