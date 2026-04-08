import {test} from '@playwright/test'

test('Test1', async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
});

test('Test2', async({page})=>
{
    await page.goto("https://in.search.yahoo.com/?fr2=inr");
    await page.waitForTimeout(2000);
});

test('Test3', async({page})=>
{
    await page.goto("https://www.bing.com/");
    await page.waitForTimeout(2000);
});