import { Locator, Page } from '@playwright/test';

export class Header_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    get icon_login(): Locator {
        return this.page.locator(`a:has-text("Signup / Login")`)
    }
    // cho tam 2 locator vao day
    get delete_account_btn(): Locator{
            return this.page.getByRole('link', { name: 'Delete Account' })
    }
    get verify_delete_account(): Locator{
            return this.page.locator(`b:has-text("Account Deleted!")`)
    }
}
/////
