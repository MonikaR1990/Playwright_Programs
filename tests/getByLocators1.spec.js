import {test, expect} from '@playwright/test';

test('test', async({page})=>{
 await page.goto("https://www.amazon.in");

 await page.getByPlaceholder('Search Amazon.in').fill("Apple Mobile");

 await page.getByRole('button', {name: 'Go'}).click();

 await page.getByRole('textbox', {name: 'Search Amazon.in'}).fill("Laptop");

 await page.getByRole('combobox', {name: 'searchDropdownDescription'}).click();

 await page.getByRole('option', {name: 'Amazon Fashion'}).click();

 await page.getByRole('checkbox', {name: 'Made for Amazon'}).click();

 await page.getByRole('radio', {name: 'male'}).click();

 await page.getByRole('form').nth(1).click();

 await page.getByText('Submit').click(); //Best

 await page.getByText('Payment is successful!').click();

 await page.locator('div[text=Payment is successful!]').click();

 await page.getByLabel('Username').fill("Monika");

 await page.getByLabel('password').fill("12345");

 await page.getByAltText('Vinoth Tech Solutions').click();

 await page.locator('.betterdocs-category-icon-img').click();

 await page.locator('[src="https://vinothqaacademy.com/wp-content/uploads/2024/07/2-150x150.jpeg"]').click();

 await page.locator('[src*="2024/07/2"]').click();

 await page.locator('[class*="heading-title"]').first().click();

 await page.locator('[id^="ap_"]').click();

 await page.locator('[id$="login"]').click();

    await page.getByTestId('login-button').click();

    await page.locator('[data-test="login-button"]').click();







 


 
 await page.waitForTimeout(2000);


 
});

