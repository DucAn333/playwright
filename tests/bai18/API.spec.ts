import { test, expect } from '@playwright/test';


test.describe('Vòng đời tài khoản end-to-end', () => {
// de data o day luon cho nhanh
  
const userData = {
  "name": "Nguyen Van A",
  "email": `nguyenvana${Date.now()}@example.com`,
  "password": "SecurePassword123!",
  "title": "Mr",
  "birth_date": "15",
  "birth_month": "08",
  "birth_year": "1995",
  "firstname": "A",
  "lastname": "Nguyen Van",
  "company": "Công ty TNHH Ví Dụ",
  "address1": "123 Đường Lê Lợi",
  "address2": "Phường Bến Nghé",
  "country": "India",
  "zipcode": "700000",
  "state": "Hồ Chí Minh",
  "city": "Hồ Chí Minh",
  "mobile_number": "0901234567"
};

test('Test API Register Account', async ({ request }) => {
const URL = 'https://automationexercise.com/api/createAccount';  
const response = await request.post(URL, {
    form: userData
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toBe('User created!');
});
test('đăng nhập bằng tài khoản vừa tạo', async ({ request }) => {
const URL = 'https://automationexercise.com/api/getUserDetailByEmail';
const response = await request.get(URL, {
    params: {
      email: userData.email,
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual(expect.objectContaining({
    responseCode: 200,
    user: expect.objectContaining({
    name: userData.name,
    }),
  }));
  
});
test('delete account', async ({ request }) => {
const URL = 'https://automationexercise.com/api/deleteAccount';
const response = await request.delete(URL, {
    form: {
      email: userData.email,
      password: userData.password
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.message).toBe('Account deleted!');
});
});
