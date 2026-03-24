import {test} from '../fixtures/Screenshot.spec'
import {expect} from '@playwright/test';

test('Login Test', async({screenshotonFailure})=>{
    
    await screenshotonFailure.goto("https://parabank.parasoft.com/parabank/index.htm");
    await screenshotonFailure.fill('[name="username"]', "johnwewe");
    await screenshotonFailure.fill('[name="password"]', "demowewe");
    await screenshotonFailure.click('input[value="Log In"]');

    await expect(screenshotonFailure).toHaveURL(/overview\.htm/);


});