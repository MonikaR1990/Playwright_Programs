import { test, expect } from '@playwright/test';

test('File Download Example', async ({ page }) => {

    await page.goto("https://letcode.in/file");

    const downloadPromise = page.waitForEvent('download'); //action store in a varaiable
    
    await page.click('#xls');

    //await download.cancel(); //It is used to cancel or stop the file download

    const download = await downloadPromise;

    //await download.saveAs("E:\\NewData.xlsx"); //Recommended

    const path = await download.path(); //File is stored in temporary location
    console.log(path);

    console.log(download.suggestedFilename()); //Print the file name in the console

    expect(download.suggestedFilename()).toBe('sample.xlsx');

    const filename = download.suggestedFilename();
    console.log(filename);

    const fileURL = download.url();
    console.log(fileURL);

    //await download.delete();

    const downloadPage = download.page();

    const fileURL1 = downloadPage.url();
    console.log(fileURL1);
     const fileTitle = downloadPage.title();
     console.log(fileTitle);

});