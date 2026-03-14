import { test } from '@playwright/test';
test('Handling New Window', async ({ page }) => {

 await page.goto('https://the-internet.herokuapp.com/windows');

   const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText("Click Here").click()

    ]);
    
    await popup.waitForLoadState();

    console.log(await popup.title());

  
  
});

