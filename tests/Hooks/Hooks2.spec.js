import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Test Started")
});

test.beforeEach(async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
});

//TestCase 1: TCO1 - Valid Login Test
test('Valid Login Test', async({page})=>{
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('button').click();
    
    await expect(page.locator('h2')).toContainText("Secure");
    //await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
});

//TestCase 2: TC02 - Invalid Password
test('Ivalid Password Test', async({page})=>{
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecret");
    await page.locator('button').click();
    
    await expect(page.locator('h2')).not.toContainText("Secure");
});

//TestCase 3: TC03 - Invalid Username
test('Ivalid Username Test', async({page})=>{
    await page.locator('#username').fill("tomsmith@123");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('button').click();
    
    //await expect(page.locator('h2')).not.toContainText("Secure");
    //await expect(page).not.toHaveURL("https://the-internet.herokuapp.com/secure");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");
});

//TestCase 4: TC04 - Empty User Credentials
test('Empty User Credentials Test', async({page})=>{
    await page.locator('#username').fill("");
    await page.locator('#password').fill("");
    await page.locator('button').click();
    
    //await expect(page.locator('h2')).not.toContainText("Secure");
    //await expect(page).not.toHaveURL("https://the-internet.herokuapp.com/secure");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");
});

//TestCase 5: TC05 - Logout Test
test('Logout Test', async({page})=>{
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('button').click();

    await page.locator('[href="/logout"]').click();

    //await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");

    await expect(page.locator('#flash')).toContainText("logged out");
});



test.afterEach(async({page}, testInfo)=>{
    if(testInfo.status != testInfo.expectedStatus)
    {
        await page.screenshot({path: `screenshots/${testInfo.title}.png`});
    }
});

test.afterAll(async()=>{
    console.log("Test Completed");
})