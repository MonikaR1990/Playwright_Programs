import {test, expect} from '@playwright/test'

test('Create Product', async({request})=>{
    const response = await request.post('https://fakestoreapi.com/products', {
        data:{
            title: "Jega Jewelery",
            price: 23000,
            description: "Super Collection Jewelery",
            category: "jewelery",
            image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
            ratings: {
                rate: 4.6,
                count: 500
            }

        }
    });

    const body = await response.json();
    console.log(body);

        expect(response.status()).toBe(201);
    

    
});