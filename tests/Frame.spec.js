import {test, expect} from '@playwright/test';

// test('page.frame', async({page})=>{
//   await page.goto("https://practice-automation.com/iframes/");

//   const frame = page.frame({name: "top-iframe"});

//   await frame.getByText('Docs').click();
// });

// test('contentFrame', async({page})=>{
//   await page.goto("https://practice-automation.com/iframes/");

//   const iframeElement = page.locator('#iframe-1');

//   const frame = iframeElement.contentFrame();

//   await frame.getByText('Docs').click();


// });

test('page.frames', async({page})=>{
  await page.goto("https://practice-automation.com/iframes/");

  const frames = page.frames();

  console.log(frames.length);

  frames.forEach(f=>{
    console.log(f.url());
  });


});




//Frame Handling Methods

//1. frameLocator() //auto wait
//2. page.frame() //No auto
//3. contentFrame() //Convert the iframe locator into Frame OBject
//4. page.frames() //Return all Pages in the page