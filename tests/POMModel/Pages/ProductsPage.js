export class ProductsPage
{
    constructor(page)
    {
        this.page = page;
        this.productheader = page.locator('h2:has-text("All Products")');
        this.productCards = page.locator('.product-image-wrapper'); 
        this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');
        this.viewCartLink = page.locator("//div[@class='shop-menu pull-right']//a[@href='/view_cart']");
    }

    async goToProductPage()
    {
        await this.page.goto("https://automationexercise.com/products");
    }
    async isProductPageLoaded()
    {
        return await this.productheader.isVisible();
    }
    async addProductToCart(index)
    {
        const product = this.productCards.nth(index);

        await product.hover();
        await product.locator('a:has-text("Add to cart")').first().click();
    }

    async clickContinueShopping()
    {
        await this.continueShoppingBtn.click();
    }

    async clickViewCart()
    {
        await this.viewCartLink.click();
    }
}

