

import {test} from '@playwright/test'

test('Measure Amazon Page Load Time', async({page})=>{

    const startTime = Date.now();

    await page.goto('https://www.amazon.in');

    await page.waitForLoadState('load');

    const endTime = Date.now();

    console.log(`Page Load Time: ${endTime - startTime} ms`);



});



