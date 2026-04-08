import {test, expect} from '@playwright/test'

test('Categories wise', async({request})=>{
    const response = await request.get("https://fakestoreapi.com/products/categories");
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(body)).toBeTruthy();
    
})

test('Particular Category', async({request})=>{
    const response = await request.get("https://fakestoreapi.com/products/category/jewelery");
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body[0].category).toBe('jewelery'); //1 product category

    body.forEach(p => {
        expect(p.category).toBe('jewelery');
    });  //All product category test

})