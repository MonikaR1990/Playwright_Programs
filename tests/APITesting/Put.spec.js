import {test, expect} from '@playwright/test'



test('Update Product', async({request})=>{
    const respone = await request.put('https://fakestoreapi.com/products/6', {
        data: {
            price: 200
        }
    })

    const body = await respone.json();
    console.log(body);

    expect(respone.status()).toBe(200);
    
});