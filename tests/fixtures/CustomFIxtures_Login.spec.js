import {test as base, expect} from '@playwright/test'

export const test = base.extend({
    loginPage: async({page}, use) => 
    {
        await page.goto("https://parabank.parasoft.com/parabank/index.htm");
        await use(page); //Provide page to use
    },
    validLogin: async({page}, use) => 
    {
         await page.goto("https://parabank.parasoft.com/parabank/index.htm");
         await page.locator('[name="username"]').fill("john");
         await page.locator('[name="password"]').fill("demo");
         await page.locator('input[value="Log In"]').click();
         await use(page);
    }
});

export {expect};


//extend used to create custom fixture
//export -> make this fixture usable in other files
//loginPage -> fixture name
//use -> function to pass data to text fixture
