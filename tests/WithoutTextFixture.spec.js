const { test, chromium } = require('@playwright/test');


test('test2', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com/"); 

});
