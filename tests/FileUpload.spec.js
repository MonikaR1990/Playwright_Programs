 
 import {test, expect} from '@playwright/test';

test('File Upload Example', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');



    //upload file //<input type="file">
    await page.setInputFiles('#singleFileInput', "F:\\TechNG\\Resumes_Prep\\Mathan\\Mathan_M_Resume_UP.docx")

    await page.setInputFiles('#multipleFilesInput', ['F:\\TechNG\\Resumes_Prep\\Jegadeesh\\Jegadeesh_Resume.docx', 'F:\\TechNG\\Resumes_Prep\\Jegadeesh\\Ramraj_Resume.docx'])
    
    await page.setInputFiles('#singleFileInput', []);

    await page.waitForTimeout(7000);

});

//Repeated Code
//Harr to Maintain


