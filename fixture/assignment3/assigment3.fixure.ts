import { test as baseTest } from '@playwright/test';
import { Goto_login_signUp, Login, new_account } from '../../helper/assignment3/action';
import { Header_page } from '../../page/assignment3/header';
import { login_page, } from '../../page/assignment3/login';
import { signUp_page } from '../../page/assignment3/signUp';

export  { expect} from '@playwright/test';

export type indexFixture = {
    gotoLogin : Goto_login_signUp;
    login : Login;
    header : Header_page;
    login_page : login_page;
    loginPage : login_page;
    new_account : new_account;
    signUp_page : signUp_page;
}
export const test = baseTest.extend<indexFixture>({
    header : async ({ page }, use) => {
        const header = new Header_page(page);
        await use(header);
    },
    login_page : async ({ page }, use) => {
        const loginPage = new login_page(page);
        await use(loginPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new login_page(page);
        await use(loginPage);
    },
    gotoLogin: async ({ page }, use) => {
        const gotoLogin = new Goto_login_signUp(page);
        await use(gotoLogin);
    },
    login: async ({ page }, use) => {
        const login= new Login(page);
        await use(login);
    },
    signUp_page: async ({ page }, use) => {
        const signUp= new signUp_page(page);
        await use(signUp);
    },
    new_account: async ({ page }, use) => {
        const newAccount = new new_account(page);
        await use(newAccount);
    }

    
}
);
