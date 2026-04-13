import {test} from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Fake Test Data', async({page})=>{

    const name = faker.person.fullName();
    const email = faker.internet.email();


    await page.goto("https://automationexercise.com/login");

     await page.locator('[data-qa="signup-name"]').fill(name);
    await page.locator('[data-qa="signup-email"]').fill(email);

     await page.locator('[data-qa="signup-button"]').click();

     console.log(name);
     console.log(email);



})