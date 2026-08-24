import {  test ,  expect } from '../../fixture/assignment3/assigment3.fixure';
import { RegisterTestCase } from '../../type/data_assignment3/register.interface';

declare const require: (moduleName: string) => any;
declare const __dirname: string;

const { readFileSync } = require('fs');
const path = require('path');

const registerDataPath = path.resolve(__dirname, '../../type/data_assignment3/registerData.csv');
const csvLines: string[] = readFileSync(registerDataPath, 'utf8').trim().split(/\r?\n/);
const headers: string[] = csvLines[0].split(',');
const data: RegisterTestCase[] = csvLines.slice(1).map((line: string) => {
const values: string[] = line.split(',');
return headers.reduce((record: RegisterTestCase, header: string, index: number) => {
    record[header as keyof RegisterTestCase] = values[index] as never;
    return record;
  }, {} as RegisterTestCase);
});


const link = 'https://automationexercise.com';

test.describe('dang ki', () => {
  
  test.beforeEach(async ({ page }) => {
    // 1. Chặn các request quảng cáo rác để tăng tốc độ load trang
    await page.route('**/*', (route) => {
      const url = route.request().url();

      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('googleads')
      ) 
      {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Khởi tạo Object

    // 3. Điều hướng tới trang web
    await page.goto(link);
    await expect(page).toHaveURL(link);
  });
for (const dataLogin of data) {
  test(`${dataLogin.testCaseName}`, async ({ header, new_account, loginPage }) => {
    await header.icon_login.click();
    await new_account.fill_name_email(dataLogin);
    if (dataLogin.Go_to_info === 'TRUE' && dataLogin.expectedResult === 'success') {
      await new_account.fill_info(dataLogin);
      await expect(loginPage.verify_login).toBeVisible();
      await new_account.delete_account();
    }
    await expect (loginPage.verify_login).toBeHidden();
});
}
});