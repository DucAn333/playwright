import { Locator, Page } from '@playwright/test';

export class signUp_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    get login_name_input(): Locator {
        return this.page.locator('[data-qa="signup-name"]')
    }
    get login_email_input(): Locator {
        return this.page.locator('[data-qa="signup-email"]')
    }
    get Login_btn():Locator{
        return this.page.locator('[data-qa="signup-button"]')
    }
}
export class fill_account_info {
    page: Page;
    constructor(page: Page) {
        this.page = page;
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
        get Mr_radio(): Locator{
            return this.page.getByRole('radio', { name: 'Mr.', checked: false })
        }
        get Mrs_radio(): Locator{
            return this.page.getByRole('radio', { name: 'Mrs.', checked: false })
        }get name_input():Locator{
            return this.page.locator('[data-qa="name"]')
        }
        get email_input():Locator{
            return this.page.locator('[data-qa="email"]')
        }
        get create_password_input():Locator{
            return this.page.locator('[data-qa="password"]')
        }
        get day_droplist():Locator{
            return this.page.locator('[data-qa="days"]')
        }
        get month_droplist():Locator{
            return this.page.locator('[data-qa="months"]')
        }
        get year_droplist():Locator{
            return this.page.locator('[data-qa="years"]')
        }
        get sign_up_radio():Locator{
            return this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!', checked: false })
        }
        get receive_radio():Locator{
            return this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!', checked: false })
        }
        get firt_name_input(): Locator{
            return this.page.locator('[data-qa="first_name"]')
        }
        get last_name_input(): Locator{
            return this.page.locator('[data-qa="last_name"]')
        }
        get company_name_input(): Locator{
            return this.page.locator('[data-qa="company"]')
        }
        get address1_name_input(): Locator{
            return this.page.locator('[data-qa="address"]')
        }
        get address2_name_input(): Locator{
            return this.page.getByRole('textbox', { name: 'Address 2' })
        }
        get country_name_input(): Locator{
            return this.page.locator('[data-qa="country"]')
        }   
        get state_input(): Locator{
            return this.page.locator('[data-qa="state"]')
        }
        get city_input(): Locator{
            return this.page.locator('[data-qa="city"]')
        }
        get zipcode_input(): Locator{
            return this.page.locator('[data-qa="zipcode"]')
        }
        get mobile_number_input(): Locator{
            return this.page.locator('[data-qa="mobile_number"]')
        }
        get create_account_btn(): Locator{
            return this.page.getByRole('button', { name: 'Create Account' })
        }
        get continue_btn(): Locator{
            return this.page.locator('[data-qa="continue-button"]')
        }
        get verify_new_account(): Locator{
            return this.page.locator(`b:has-text("Account Created!")`)
        }

}