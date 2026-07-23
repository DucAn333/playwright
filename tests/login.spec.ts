import { expect, test } from '@playwright/test';
import { Login_page,Data_account } from '../locators/login.locators';
import { Page } from '@playwright/test';
//import { wait } from '../locators/wait';

test.beforeEach(async ({ page }) => {

    const loginUI = Login_page(page);
    const account = Data_account[0];
    await page.goto('http://automationexercise.com');   
    await loginUI.sign_up.click();
    await expect(loginUI.text_login).toBeVisible();
    await loginUI.Email_text_box.pressSequentially(account.email);
    await loginUI.Password_text_box.pressSequentially(account.password);
    await loginUI.login_button.click();
    // anh check giup em vo, em de nhu nay thi bi loi
    // await expect(loginUI.verify).toBeVisible();
    await expect(loginUI.check).toBeVisible();
    //await wait(1000);
    await page.waitForTimeout(3000);
});


test('Test_case_dang_nhap', async ({ page }) => {

await page.goto('http://automationexercise.com');  

//khoi tao 
const loginUI = Login_page(page);
const account = Data_account[0];





await page.waitForTimeout(1000); 
//await loginUI.check.click();
//await page.close();


});

