import {test, expect} from '@playwright/test';

test('test', async({page})=>{

    await page.goto("https://www.flipkart.com/");
    
    await page.locator('//input[@title="Search for Products, Brands and More"]').fill('Laptop')

});

