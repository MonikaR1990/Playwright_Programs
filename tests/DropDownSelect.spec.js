import { test, expect } from '@playwright/test';

test('Dropdown Example', async ({ page }) => 
{
  await page.goto('https://letcode.in/dropdowns');

 // await page.selectOption('#fruits', '1'); //Select by value

 // await page.selectOption('#fruits', {label: 'Banana'}); //Select by Visible Text

  await page.selectOption('#fruits', {index: 5}); //Pine Apple

  const text = await page.locator('#fruits option:checked').textContent(); //Only Selected text

  const allText = await page.locator('#fruits').textContent(); 
  
  //Single string All text in drop down in single string

  console.log(allText);

  const allcontent = await page.locator('#fruits option').allTextContents(); //Array of Text return
  const result = allcontent.join(", ");

  console.log(result);



 


  //Drop-Down with Multi Select

  await page.selectOption('#superheros', ['Batman', 'Captain America', 'Hellboy', 'Iron Man'] );

  await page.waitForTimeout(5000);

  const selectedValue = await page.locator('#superheros').evaluate(el => Array.from(el.selectedOptions).map(opt=>opt.text));

  console.log(selectedValue);

  const allHeros = await page.locator('#superheros option').allTextContents();

  console.log(allHeros.join('\n'));

  
});