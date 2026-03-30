import { expect } from '@playwright/test';

export class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.cartItems = page.locator('#cart_info_table tbody tr');
        this.productNames = page.locator('.cart_description h4 a');
        this.productPrices = page.locator('.cart_price p');
        this.productQuantity = page.locator('.cart_quantity button');
        this.productTotalPrice = page.locator('.cart_total p');
    }

    async isCartPageLoaded()
    {
        await expect(this.page).toHaveURL(/view_cart/);
        return true;
    }

    async getCartItemsCount()
    {
       return await this.cartItems.count();
    }

    async getProductName(index)
    {
         return await this.productNames.nth(index).textContent();
    }

    async getProductQuantity(index)
    {
        return await this.productQuantity.nth(index).textContent();
    }

    async getTotalPrice()
    {
        return await this.productTotalPrice.nth(index).textContent();
    }
}

