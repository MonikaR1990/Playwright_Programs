export class LoginPage
{
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page)
    {
        this.page = page;
        this.emailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]');

        this.loggedInUser = page.locator('a:has-text("Logged in as")');
        this.errorMsg = page.locator('p:has-text("Your email or password is incorrect!")');
    }

    async login(email, password)
    {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

}

