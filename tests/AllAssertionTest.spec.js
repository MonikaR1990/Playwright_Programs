import {test, expect} from '@playwright/test';

const baseURL = "https://vinothqaacademy.com/demo-site-create-account/";

test('toHaveTitlle', async({page})=>{

    await page.goto(baseURL);

    await expect(page).toHaveTitle("Demo Site – Create Account – Vinoth Tech Solutions");

});

test('toBeVisible', async({page})=>{

    await page.goto(baseURL);

    const fname = page.locator('#firstName');

    await expect(fname).toBeVisible();

});

test('toBeEnabled', async({page})=>
{
    await page.goto(baseURL);

    const fname = page.locator('#firstName');

    await expect(fname).toBeEnabled();
});

test('toHaveText', async({page})=>
{
    await page.goto(baseURL);

    const heading = page.getByRole('heading', { name: 'Create Your Account' });
    //const heading = page.locator('text=Create Your Account');
    await expect(heading).toHaveText('Create Your Account');
});

test('toContainText', async({page})=>
{
    await page.goto(baseURL);

    const heading = page.getByRole('heading', { name: 'Create Your Account' });
    //const heading = page.locator('text=Create Your Account');
    await expect(heading).toContainText('Account');
});

test('toHaveURL', async({page})=>
{
    await page.goto(baseURL);
    await expect(page).toHaveURL("https://vinothqaacademy.com/demo-site-create-account/");
});

test('toHaveCount', async({page})=>
{
    await page.goto(baseURL);
    
    const countCheck = page.locator('[type="text"]');
    await expect(countCheck).toHaveCount(8)
});

test('toHaveValue', async({page})=>
{
    await page.goto(baseURL);

    const fname = page.locator('#firstName');
    await fname.fill("Monika");
    await expect(fname).toHaveValue('Monika');
});




