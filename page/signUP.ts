import { Locator, Page } from '@playwright/test';

export const go_to_url = 'https://automationexercise.com';

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
export class CreateAccount{
    constructor(private page :Page){}
    get Mr_radio(): Locator{
        return this.page.getByRole('radio', { name: 'Mr.', checked: false })
    }
    get Mrs_radio(): Locator{
        return this.page.getByRole('radio', { name: 'Mrs.', checked: false })
    }
    get name_input():Locator{
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
        return this.page.locator('[data-qa="days"]')
    }
    get year_droplist():Locator{
        return this.page.locator('[data-qa="days"]')
    }
    get sign_up_radio():Locator{
        return this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!', checked: false })
    }
    get receive_radio():Locator{
        return this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!', checked: false })
    }


    // async open_signUp_signIn():Promise<void>{
    //     await this.menu_login.click();
    // }
    
    
    
}
export class addressInfo {
    constructor(private page :Page){}
    get firt_name_input(): Locator{
        return this.page.locator('[data-qa="first_name"]')
    }
    get last_name_input(): Locator{
        return this.page.locator('[data-qa="last_name"]')
    }
    get company_name_input(): Locator{
        return this.page.locator('[data-qa="company"]')
    }
    get address_name_input(): Locator{
        return this.page.locator('[data-qa="address"]')
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

}
