import { Locator, Page } from '@playwright/test';

export class SignUp{
    constructor(private page :Page){}
    get menu_login(): Locator{
        return this.page.getByRole('link', { name: 'Signup / Login' })
    }
    get sign_up_name_input():Locator{
        return this.page.locator('[data-qa="signup-name"]')
    }
    get sign_up_email_input():Locator{
        return this.page.locator('[data-qa="signup-email"]')
    }
    get sign_up_btn():Locator{
        return this.page.locator('[data-qa="signup-button"]')
    }
}