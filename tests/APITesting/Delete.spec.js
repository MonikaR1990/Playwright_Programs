import {test, expect} from '@playwright/test';
import { request } from 'node:http';


test('Delete Product', async({request})=>{
  const response = await request.delete('https://fakestoreapi.com/products/18');

    expect(response.status()).toBe(200);
});
    




  