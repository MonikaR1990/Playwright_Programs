import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

let registerPage;

Given('user navigates to the register page', async function () 
{
    registerPage = new RegisterPage(this.page);
    await registerPage.navigate();
});

Given('user enters registration details', async function () 
{
    const user = 
    {
        firstName: 'Bala',
        lastName: 'R',
        address: '123 Main St',
        city: 'Madurai',
        state: 'Tamil Nadu',
        zip: '625001',
        phone: '9876543210',
        ssn: '123-45-6789',
        username: 'bala123',
        password: 'bala@123'
    };
    await registerPage.register(user);
});

When('user clicks the Register button', async function () 
{
    await registerPage.submitReg();
});

Then('user should see registration successful message', async function () 
{
    const msg = await registerPage.getSuccessMessage();
    expect(msg).toContain('Welcome');
});