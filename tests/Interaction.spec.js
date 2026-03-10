import {test, expect} from '@playwright/test';

test('test', async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  /*
  await page.dblclick('[ondblclick="myFunction1()"]');

  await page.type('#name', "MOnika");


  await page.waitForTimeout(2000); */




  await page.locator('button.start').hover();

 // await page.screenshot({ path: 'screenshot.png', fullPage: true });


  // const drag = page.locator('#draggable');
  // const drop = page.locator('#droppable');

  await page.dragAndDrop('#draggable', '#droppable');

  await page.screenshot({path: 'screen.png', fullPage:true});

  await page.waitForTimeout(3000); 

});

