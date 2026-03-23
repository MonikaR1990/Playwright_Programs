import { test, expect } from '@playwright/test';

test('Static Web Table Program', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator('table[name="BookTable"]'); //Locate table

    // Get number of Rows
    const rows = table.locator("tr"); //row
    const rowCount = await rows.count();
    console.log(rowCount); //7

    //Get number of Columns
    const cols = table.locator("tr th");
    const colCount = await cols.count();
    console.log(colCount);

    //Get All Data
    for(let i = 1; i<rowCount; i++)
    {
        const cells = rows.nth(i).locator("td");
        const cellText = await cells.allTextContents();
        console.log(cellText.join(" | "));
    }

    //Get 2nd Row 3rd Column Data


    const specfictext = await table.locator("tr:nth-child(2) td:nth-child(3)").textContent();
    console.log(specfictext);

    //nth-child always starts from 1











  
});