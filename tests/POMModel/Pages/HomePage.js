export class HomePage
{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.signupLoginBtn = page.locator('[href="/login"]');
    }

    async goToHomePage()
    {
        await this.page.goto("https://automationexercise.com/");
    }

    async clickSignupBtn()
    {
        await this.signupLoginBtn.click();
    }
}