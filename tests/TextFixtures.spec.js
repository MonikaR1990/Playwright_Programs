import {test} from '@playwright/test';



//Clean
//Reusable
//Easy to maintain

//1. page
//2. browser
//3. context
//4. request
//5. testInfo
//6. workerInfo
//7. browserName
//8. baseURL
//9. storageState


// Browser (chrome)
//    |
// Context (user 1 / user 2)
//    |
//   page

test('browser fixture', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com/")

});

test('context fixtures', async({context})=>{
    const page = await context.newPage();
    await page.goto("https://www.google.com/")    
});

test('testing fixture', async({page})=>{

    await page.goto("https://www.google.com/")
});

test('API test', async({request})=>
{
    const response = await request.get('https://reqres.in/api/users');
    console.log(response.json)
});

test('Multi User Login', async ({ browser }) => {

  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://www.google.com/');
  // user1 login

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://www.gmail.com/');
  // user2 login

});