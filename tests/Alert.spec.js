import { test } from '@playwright/test';




test('Handling Alert Dialog Box', async ({ page }) => {

 await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

 page.on('dialog', async dialog => 
  {
    await page.waitForTimeout(2000);    
    
    

    dialog.type();
    console.log(dialog.message());
    dialog.accept("Hello World");
    //dialog.accept();
    //dialog.dismiss();

  });
   

   await page.getByText("Click for JS Prompt").click();
   await page.waitForTimeout(2000);
  
  
});

