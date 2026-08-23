import { Locator, Page } from '@playwright/test'

export class SignIn{
    constructor(private page :Page){}
    get login_btn(): Locator{
        return this.page.getByRole('link', { name: 'Signup / Login' })
    }
}