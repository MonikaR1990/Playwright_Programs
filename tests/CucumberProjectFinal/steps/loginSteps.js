import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

let loginPage;

Given('user navigates to the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

Given('user enters username and password', async function () {
    await loginPage.login('john', 'demo');
});

Given('user enters invalid username and password', async function () {
    await loginPage.login('invalidUser', 'wrongPass'); // ❌ invalid data
});

When('user clicks the Login button', async function () {
    // already handled inside login()
});

Then('user should be navigated to the accounts overview page', async function () {
    await this.page.waitForURL('**/overview.htm');
    await expect(this.page).toHaveURL(/.*overview.htm/);
});

Then('user should see login error message', async function () 
{
    const errorText = await loginPage.getErrorMsg(); //The username and password could not be verified.
    console.log(errorText);

    expect(errorText).toContain('The username and password could not be verified');
});