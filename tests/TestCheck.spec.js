import { test, expect } from '@playwright/test';

test('Video Recording Example', async ({ page }) => {

    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").type("Abdul Kalam")

    await page.waitForResponse('[role="presentation"]')

    const elements =await page.$$('[role="presentation"]')

    for(let i=0;i<elements.length;i++){
        
        const text=await elements[i].textContent()

        if(text.includes('quotes')){
            await elements[i].click()
            break
        }
    }



   

});