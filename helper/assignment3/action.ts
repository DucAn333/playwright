import { Page, expect } from '@playwright/test';
import { Header_page } from '../../page/assignment3/header';
import { signUp_page, fill_account_info } from '../../page/assignment3/signUp';
import { login_page } from '../../page/assignment3/login';

export class Goto_login_signUp {
    readonly headerPage : Header_page;
    constructor(page: Page) {
    this.headerPage = new Header_page(page);
    }
    async Click_login_icon():Promise<void>{
        await this.headerPage.icon_login.click();
    }
}
export class Login {
    readonly login_account : login_page;
    constructor(page: Page) {
    this.login_account = new login_page(page);
    }
    async login(account : any ):Promise<void>{
        await this.login_account.login_email_input.pressSequentially(account.email);
        await this.login_account.login_pass_input.pressSequentially(account.password);
        await this.login_account.Login_btn.click();
    }
}
export class new_account{
    readonly  new_account :  fill_account_info;
    readonly  Header_page : Header_page;
    constructor(page: Page) {
    this.new_account = new  fill_account_info(page);
    this.Header_page = new Header_page(page);
    }
    async fill_name_email(account : any ):Promise<void>{
        await this.new_account.sign_up_name_input.pressSequentially(account.name);
        await this.new_account.sign_up_email_input.pressSequentially(account.email);
        await this.new_account.sign_up_btn.click();
    }
    async fill_info(account : any ):Promise<void>{
        await this.new_account.Mr_radio.check();
        await this.new_account.create_password_input.pressSequentially(account.password);
        await this.new_account.day_droplist.selectOption(account.day);
        await this.new_account.month_droplist.selectOption(account.month);
        await this.new_account.year_droplist.selectOption(account.year);
        await this.new_account.sign_up_radio.check();
        await this.new_account.receive_radio.check();
        await this.new_account.firt_name_input.pressSequentially(account.firstName);
        await this.new_account.last_name_input.pressSequentially(account.lastName);
        await this.new_account.address1_name_input.pressSequentially(account.address1);
        await this.new_account.address2_name_input.pressSequentially(account.address2);
        await this.new_account.country_name_input.selectOption(account.country);
        await this.new_account.state_input.pressSequentially(account.state);
        await this.new_account.city_input.pressSequentially(account.city);
        await this.new_account.zipcode_input.pressSequentially(account.zipcode);
        await this.new_account.mobile_number_input.pressSequentially(account.mobileNumber)
        await this.new_account.create_account_btn.click();
        await expect(this.new_account.verify_new_account).toBeVisible();
        await this.new_account.continue_btn.click();
    }
    async delete_account( ):Promise<void>{
        await this.Header_page.delete_account_btn.click();
        await expect(this.Header_page.verify_delete_account).toBeVisible();
    }
    

}
