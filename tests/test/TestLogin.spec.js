import {test, expect} from '../fixtures/CustomFIxtures_Login.spec'

test('Valid Login Test1', async({validLogin})=>{
   await expect(validLogin.getByRole('link', { name: 'Accounts Overview' })).toBeVisible();
})

test('Valid Login Test2', async({validLogin})=>{
    await expect(validLogin).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");
})

test('Valid Login Test3', async({validLogin})=>{
    await expect(validLogin.getByText('Welcome')).toBeVisible();
});

test('Invalid Login Test1', async({loginPage})=>{
    await loginPage.fill('[name="username"]', "mona")
    await loginPage.fill('[name="password"]', "123345")
    await loginPage.click('input[value="Log In"]');
    await expect(loginPage.getByText('Error!')).toBeVisible();

});

test('Invalid Login Test2', async({loginPage})=>{
    await loginPage.fill('[name="username"]', "mona")
    await loginPage.fill('[name="password"]', "123345")
    await loginPage.click('input[value="Log In"]');
    await expect(loginPage).toHaveURL(/login\.htm/);
});




