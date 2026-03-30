import {test, expect} from '@playwright/test';
import { HomePage } from '../../POMModel/Pages/HomePage';
import { LoginPage } from '../../POMModel/Pages/LoginPage';

let home;
let login;

test.beforeEach(async({page})=>
{
    home = new HomePage(page);
    login = new LoginPage(page);

   await home.goToHomePage();
   await home.clickSignupBtn(); 
});

test.afterEach(async({page})=>
{
    await page.close();
});

test('Valid Login Test', async({page})=>
{
    await login.login("testingnew@gmail.com", "testingnew");
    await expect(login.loggedInUser).toBeVisible();
});

test('Invalid Login Test', async({page})=>
{
    await login.login("wrong@gmail.com", "wrong");
    await expect(login.errorMsg).toBeVisible();
});