import { test, expect } from '@playwright/test';

test('test API', async ({ request }) => {
 
    const API_URL = 'https://automationexercise.com/api/productsList'

    const newRequest = await request.get(API_URL);
    const listBrand = await newRequest.json();
    const countBrand = listBrand.products;
   
    let count = 0;
    
    for (const brand of countBrand){
        if (brand.brand === 'Madame'){
            count++;
        }
    }

    console.log(`co ${count} san pham madame  ` );
    expect(count).toBe(5);
});
test('test API post', async ({ request }) => {
 
    const API_URL = 'https://automationexercise.com/api/productsList'

    //aaa
});