export class RegisterPage {
    constructor(page) 
    {
        this.page = page;
        this.firstName = page.locator('input[name="customer.firstName"]');
        this.lastName = page.locator('input[name="customer.lastName"]');
        this.address = page.locator('input[name="customer.address.street"]');
        this.city = page.locator('input[name="customer.address.city"]');
        this.state = page.locator('input[name="customer.address.state"]');
        this.zipCode = page.locator('input[name="customer.address.zipCode"]');
        this.phone = page.locator('input[name="customer.phoneNumber"]');
        this.ssn = page.locator('input[name="customer.ssn"]');
        this.username = page.locator('input[name="customer.username"]');
        this.password = page.locator('input[name="customer.password"]');
        this.confirmPassword = page.locator('input[name="repeatedPassword"]');
        this.registerBtn = page.locator('input[value="Register"]');
        this.successMsg = page.locator('h1'); // Usually "Welcome" text
    }

    async navigate() 
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }
    async register(user) 
    {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.address.fill(user.address);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zip);
        await this.phone.fill(user.phone);
        await this.ssn.fill(user.ssn);
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);
        
    }
    async submitReg()
    {
        await this.registerBtn.click();
    }

    async getSuccessMessage() 
    {
        return await this.successMsg.textContent();
    }
}