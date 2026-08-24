
export interface LoginTestCase {
  testCaseName: string;
  email: string;
  password: string;
  expectedResult: 'success' | 'failure';
  expectedErrorMessage?: string;
}
