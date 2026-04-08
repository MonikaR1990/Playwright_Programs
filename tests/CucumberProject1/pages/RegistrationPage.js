// pages/RegistrationPage.js
class RegistrationPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailInput = '#reg_email';
        this.passwordInput = '#reg_password';
        this.registerButton = 'input[name="register"]';
        this.greeting = 'p:has-text("Hello")';
        this.logoutLink = 'text=Logout';
    }

    async navigate() {
        await this.page.goto('https://practice.automationtesting.in/my-account/');
    }

    async register(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.registerButton);
    }

    async isRegisteredSuccessfully() {
        // Wait for URL redirect
        await this.page.waitForURL('**/my-account/', { timeout: 30000 });

        // Wait for greeting
        const greetingLocator = this.page.locator(this.greeting);
        await greetingLocator.waitFor({ state: 'visible', timeout: 20000 });
        const text = await greetingLocator.textContent();
        if (!text.includes('Hello')) {
            throw new Error('Registration not successful: greeting not found');
        }

        // Verify logout button
        const logoutVisible = await this.page.isVisible(this.logoutLink);
        if (!logoutVisible) {
            throw new Error('Registration not successful: Logout button not visible');
        }

        return true;
    }
}

module.exports = RegistrationPage;