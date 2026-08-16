import { account } from '../../type/bai14/bai14.data';
import { product_name , quanlity } from '../../type/bai14/bai14.data';
import { Locator, Page } from '@playwright/test';



export class add_payment {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get icon_card(): Locator {
        return this.page.getByRole('link', { name: 'Cart' })
    }
    // thieu verify cac thong tin khac nua :D
    get verify_info(): Locator {
        return this.page
            .locator('#address_delivery')
            .getByText(`Mr. ${account.firtName} ${account.lastName}`, { exact: true });
    }
    get Place_oder_btn(): Locator {
        return this.page.getByRole('link', { name: 'Place Order' })
    }
    get Name_on_card_input(): Locator {
        return this.page.locator('[data-qa="name-on-card"]')
    }
    get card_number_input(): Locator {
        return this.page.locator('[data-qa="card-number"]')
    }
    get CVC_input(): Locator {
        return this.page.locator('[data-qa="cvc"]')
    }
    get expiry_month_input(): Locator {
        return this.page.locator('[data-qa="expiry-month"]')
    }
    get expiry_year_input(): Locator {
        return this.page.locator('[data-qa="expiry-year"]')
    }
    get payment_and_confirm_btn(): Locator {
        return this.page.locator('[data-qa="pay-button"]')
    }
    get verify_oder(): Locator{
        return this.page.getByText('Congratulations! Your order has been confirmed!', { exact: true })
    }
    get comment_input(): Locator {
        return this.page.locator('[name="message"]')
    }
   
    
    
}
