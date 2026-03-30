import {test, expect} from '@playwright/test';
import {ProductsPage} from '../Pages/ProductsPage';
import {CartPage} from '../Pages/CartPage';

test('Add Products to Cart and Validate', async({page})=>{
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

//1. Open Product Page
await products.goToProductPage();

//2. Verify Product Page is Loaded
expect(await products.isProductPageLoaded()).toBeTruthy();

//3. Add First Product
await products.addProductToCart(0);
await products.clickContinueShopping();

//4. Add second Product
await products.addProductToCart(1);
await products.clickContinueShopping();

//5. Navigate to Cart 
await products.clickViewCart();

//6. Validate Cart Page
expect(await cart.isCartPageLoaded()).toBeTruthy();

//7. Validate Product Count
expect(await cart.getCartItemsCount()).toBe(2);

//8. Validate Product Name Validate
const productName = await cart.getProductName(0); //Blue Top
expect(productName).toContain('Top');

//9. Validate Quantity
const quantity = await cart.getProductQuantity(1); //1
expect(quantity).toContain('1');



});
