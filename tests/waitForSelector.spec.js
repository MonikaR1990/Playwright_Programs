import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://vinothqaacademy.com/demo-page-healthcare/");

  await page.fill('#patient-name', 'Narmatha');
  await page.click('[value="female"]');

  await page.click('[onClick="handleSubmit()"]');

  await page.waitForTimeout(2000); //Ideal //Sleep Mode

  await page.waitForSelector('#success-message');

  const message = page.textContent('#success-message')

 console.log(message);
 
});
