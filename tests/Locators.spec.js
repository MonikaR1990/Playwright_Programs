const {chromium} = require('playwright');

(async () => {

  // 1. Launch browser
  const browser = await chromium.launch({
    headless: false,
  });

//Tab = Page //Create New Page

const page = await browser.newPage();

//Navigate URL to the Page

await page.goto("https://www.saucedemo.com/");

//Locators
//Id
//name
//classname
//attribute

//id -> #

await page.locator('#user-name').fill('standard_user');

await page.locator('#password').fill('secret_sauce');

//class --> . dot

await page.locator('.input_error form_input').fill('standard_user');

//attribute

await page.locator('[name="user-name"]').fill("standard_user");

await page.locator('[placeholder="Username"]').fill("standard_user")

await page.locator('[type="password"]').fill("standard_user");

await page.locator('#login-button').click();

await page.locator('[data-test="login-button"]').click();

await page.locator('[id="login-button"]').click();

await page.locator('text=Swag Labs').getByText();







//Wait for few seconds
await page.waitForTimeout(2000);


//Browser Close
await browser.close();



})();
