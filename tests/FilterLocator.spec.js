import {test, expect} from '@playwright/test';

test('test', async({page})=>{

    await page.goto("https://www.amazon.in/");
    
    await page.locator('#twotabsearchtextbox').fill('Laptop');

     await page.locator('#nav-search-submit-button').click();

      await page.waitForSelector('[data-component-type="s-search-results"]');

    const products = page.locator('h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal span');

    //Filter only HP Laptop

    await page.waitForTimeout(10000);

    const hpLapTop = products.filter({ hasText: /hp/i });

    const hpnames = await hpLapTop.allTextContents();
    console.log("HP Count:", hpnames.length);

    console.log(hpnames);
/*
//for Specific Element Click    

await hpLapTop.nth(3).click();

await page.waitForTimeout(3000);

//for First Element Click    

await hpLapTop.first().click();

await page.waitForTimeout(3000);

//for last Element Click    


await hpLapTop.last().click();

await page.waitForTimeout(3000);

*/


    
});

