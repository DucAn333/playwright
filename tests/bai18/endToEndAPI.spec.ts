import { test, expect } from '@playwright/test';
import { createAccountData } from '../../type/bai18/data';
test.describe('Vòng đời tài khoản end-to-end', () => {
  test.describe.configure({ mode: 'serial' });
  const userData = createAccountData();

test('Test API Register Account', async ({ request }) => {
const URL = 'https://automationexercise.com/api/createAccount';  
const response = await request.post(URL, {
    form: { ...userData }
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
test('cập nhật thông tin tài khoản', async ({ request }) => {

  const updatedUserData = {
    name: 'Nguyen Van B',
    email: userData.email,
  };

  const URL = 'https://automationexercise.com/api/updateAccount';
  const response = await request.put(URL, {
    form: {
      ...userData,
      email: updatedUserData.email,
      name: updatedUserData.name,
    }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.message).toBe('User updated!');
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
test('login after delete account', async ({ request }) => {
const URL = 'https://automationexercise.com/api/verifyLogin';
const response = await request.post(URL, {
    form: {
      email: userData.email,
      password: userData.password
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(404);
});
});
