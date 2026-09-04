import { APIRequestContext } from '@playwright/test';
import { Account } from '../../type/bai18/interface';

export class AccountHelper {
  constructor(private request: APIRequestContext) {}

  async createAccount(account: Account) {
    return await this.request.post('/api/createAccount', { form: { ...account } });
  }

  async verifyLogin(email: string, password: string) {
    return await this.request.post('/api/verifyLogin', { form: { email, password } });
  }

  async updateAccount(account: Account) {
    return await this.request.put('/api/updateAccount', { form: { ...account } });
  }

  async getUserDetail(email: string) {
    return await this.request.get('/api/getUserDetailByEmail', { params: { email } });
  }

  async deleteAccount(email: string, password: string) {
    return await this.request.delete('/api/deleteAccount', { form: { email, password } });
  }
}
