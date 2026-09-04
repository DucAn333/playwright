import { test as base, expect } from '@playwright/test';
import { AccountHelper } from '../../helper/bai18/account';
import { Account } from '../../type/bai18/interface';

type Fixtures = {
  testAccount: { email: string; password: string };
};

export const test = base.extend<Fixtures>({
  testAccount: async ({ request }, use) => {
    const email = `fixture.${Date.now()}@test.com`;
    const password = 'Passw0rd!';
    const account: Account = {
      name: 'Fixture User',
      email,
      password,
      title: 'Mr',
      birth_date: '10',
      birth_month: '5',
      birth_year: '1995',
      firstname: 'Fixture',
      lastname: 'User',
      company: 'Test Company',
      address1: 'Test Address',
      address2: '',
      country: 'United States',
      zipcode: '12345',
      state: 'Test State',
      city: 'Test City',
      mobile_number: '0123456789',
    };

    const accountHelper = new AccountHelper(request);

    // CREATE
    const createResponse = await accountHelper.createAccount(account);
    const createBody = await createResponse.json();
    expect(createBody.responseCode).toBe(201);

    try {
      // TEST RUNS HERE
      await use({ email, password });
    } finally {
      // CLEANUP
      await accountHelper.deleteAccount(email, password);
    }
  },
});

export { expect };
