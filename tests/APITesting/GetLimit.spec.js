import {test,expect} from '@playwright/test'

test('Get Limited Products', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products?limit=5');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.length).toBe(5);

})