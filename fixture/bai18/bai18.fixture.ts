import { test as base, expect } from '@playwright/test';
import { AccountHelper } from '../../helper/bai18/account';
import { createAccountData } from '../../type/bai18/data';
export { expect };
type Fixtures = {
  testAccount: { email: string; password: string };
};

export const test = base.extend<Fixtures>({
  testAccount: async ({ request }, use) => {
    const account = createAccountData();
    const { email, password } = account;

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


