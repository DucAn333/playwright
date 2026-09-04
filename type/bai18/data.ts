import { Account } from './interface';

export function createAccountData(): Account {
  const email = `bai18.${Date.now()}@test.com`;

  return {
    name: 'Fixture User',
    email,
    password: 'Passw0rd!',
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
}
