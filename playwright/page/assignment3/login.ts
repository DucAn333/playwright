import { Locator, Page } from '@playwright/test';

export class login_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    get login_email_input(): Locator {
        return this.page.locator('[data-qa="login-email"]')
    }
    get login_pass_input(): Locator {
        return this.page.locator('[data-qa="login-password"]')
    }
    get Login_btn():Locator{
        return this.page.locator('[data-qa="login-button"]')
    }
    get verify_login():Locator{
        return this.page.getByRole('link', { name: 'Logout' })
    }
}