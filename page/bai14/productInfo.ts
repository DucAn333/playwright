import { Locator, Page } from '@playwright/test';
import { product_name , quanlity } from '../../type/bai14/bai14.data';
export class product_info {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get productInfo(): Locator {
        return this.page.getByRole('link', { name: 'View Product' });
    }

    get productInfomation(): Locator {
        return this.page.locator('.product-information');
    }

    get quanlity_input(): Locator {
        return this.page.locator('#quantity');
    }

    get add_to_cart(): Locator {
        return this.page.getByRole('button', { name: 'Add to cart' });
    }

    get get_verify_quanlity(): Locator {
        return this.page.getByRole('button', { name: `${quanlity}` });
    }
    get view_cart(): Locator {
        return this.page.locator(`u:has-text("View Cart")`)
    }
    
    
    
}



