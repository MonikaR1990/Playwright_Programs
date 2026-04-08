import {test, expect} from "@playwright/test"

test('Get Single Product', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products/2');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.id).toBe(2);
    expect(body.title).toBeDefined();
    expect(body.price).toBe(22.3);
    expect(body.category).toContain("men's");
});