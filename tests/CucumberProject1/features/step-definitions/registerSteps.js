// features/step-definitions/registerSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const RegistrationPage = require('../../pages/RegistrationPage');

let browser, context, page, registrationPage;
let testEmail, testPassword;

Given('user launches browser', { timeout: 30000 }, async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    registrationPage = new RegistrationPage(page);
});

Given('user navigates to my account page', { timeout: 30000 }, async function () {
    await registrationPage.navigate();
});

When('user enters email and password', { timeout: 30000 }, async function () {
    const timestamp = Date.now();
    testEmail = `testuser${timestamp}@example.com`;
    testPassword = 'Str0ng@Pass123!';
    await registrationPage.register(testEmail, testPassword);
});

Then('user should be registered successfully', { timeout: 40000 }, async function () {
    await registrationPage.isRegisteredSuccessfully();
    console.log(`User registered successfully with email: ${testEmail}`);
});

Then('close the browser', { timeout: 10000 }, async function () {
    await browser.close();
});