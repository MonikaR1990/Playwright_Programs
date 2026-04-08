import { test, expect } from '@playwright/test';

test('Get all products', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body.length);

  expect(body.length).toBeGreaterThan(0); //testing

  console.log(body);



})

//Status Code = 200
//Response data
//Data format chhecked