import { test, expect } from '../../fixture/bai18/bai18.fixture';
import { Product } from '../../type/bai18/interface';

const URL = 'https://automationexercise.com/api/searchProduct';

const keywords = ['top', 'dress', 'jean', 'saree', 'tshirt', 'xyz-not-exist'];
 
for (const keyword of keywords) {
  test(`Tìm kiếm với từ khóa "${keyword}"`, async ({ request }) => {
    const response = await request.post(URL, {
      form: {
        search_product: keyword,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(responseBody.responseCode).toBe(200);
    expect(Array.isArray(responseBody.products)).toBe(true);
    if (keyword === 'xyz-not-exist') {
      expect(responseBody.products).toHaveLength(0);
    } else {
      expect(responseBody.products.length).toBeGreaterThan(0);
    }
  });
}