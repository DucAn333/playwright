
import {  test ,  expect } from '../../fixture/assignment3/assigment3.fixure';
import data from '../../type/data_assignment3/loginData.json'


const link = 'https://automationexercise.com';



test.describe('dang nhap', () => {
  
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
  test(`${dataLogin.testCaseName}`, async ({gotoLogin , login , login_page}) => {
    await gotoLogin.Click_login_icon();
    await login.login(dataLogin);
     if (dataLogin.expectedResult === 'success') {
      await expect(login_page.verify_login).toBeVisible();
     }
     else{
      await expect(login_page.verify_login).toBeHidden();
     }
});
}
});