import { test, expect } from '@playwright/test';
import { SignUp , CreateAccount , addressInfo , go_to_url} from '../page/signUP.ts'
import { fill_name_email } from '../helper/newUser.ts'
import { name_email , newAccountInformation , newAddressInformation} from '../type/interface.ts'
import { info_account } from '../type/data.ts'



test.describe('Account Tests', () => {
  let action: fill_name_email;
  let signUp: SignUp;
  let createAccount : CreateAccount;
  const link = go_to_url;

  test.beforeEach(async ({ page }) => {
    // 1. Chặn các request quảng cáo rác để tăng tốc độ load trang
    await page.route('**/*', (route) => {
      const url = route.request().url();

      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('googleads')
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Khởi tạo Object
    signUp = new SignUp(page);
    action = new fill_name_email(signUp); 

    // 3. Điều hướng tới trang web
    await page.goto(link);
    await expect(page).toHaveURL(link);
  });

  test('Test_01: Dang ky tai khoan moi thanh cong', async ({ page }) => {
  ;

    await action.open_signUp_signIn();
    await action.sigup(info_account);
  });
});