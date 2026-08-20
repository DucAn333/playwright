import { Locator , Page } from '@playwright/test';
import { product_name , quanlity } from '../../type/bai14/bai14.data';
//const quantily = 1;
export class cart_page{
    page : Page;
    constructor(page :Page){
        this.page = page;
    }
    get Icon_product(): Locator{
            return this.page.getByRole('link', { name: 'Products' })
    }
    get verify_product(): Locator{
            return this.page.locator('#sale_image')
    }

    get search_input(): Locator{
            return this.page.getByRole('textbox', { name: 'Search Product' })
    }
    get search_submit(): Locator{
            return this.page.locator('#submit_search')
    }
    
    get product(): Locator{
            return this.page.locator('.btn.btn-default.add-to-cart')
    }
    
    get view_cart_pop_up(): Locator{
            return this.page.locator(`u:has-text("View Cart")`)
    }
    get continue_shoping_pop_up(): Locator{
            return this.page.getByRole('button', { name: 'Continue Shopping' })
    }
    get verify_product_01(): Locator{
            return this.page.locator('#product-1').getByRole('link', { name: `${product_name.product01}` })
    }
    get verify_product_02(): Locator{
            return this.page.locator('#product-2').getByRole('link', { name: `${product_name.product02}` })
    }

    // co the de so luong thanh 1 bien de verify, nhung em lay locator nhu nay luon cho nhanh
    get verify_quanlity_01(): Locator{
            return this.page.getByRole('row').filter({ hasText: `${product_name.product01}` }).getByRole('button', { name: '1' })
    }
    get verify_quanlity_02(): Locator{
            return this.page.getByRole('row').filter({ hasText: `${product_name.product02}` }).getByRole('button', { name: '1' })

    }

    //button clear product
    get clear_product_btn(): Locator {
        return this.page.locator('.fa.fa-times')
    }
    get check_out_btn(): Locator {
        return this.page.locator(`a:has-text("Proceed To Checkout")`)
    }
    get go_to_login(): Locator {
        return this.page.locator(`u:has-text("Register / Login")`)
    }
    get cart_icon(): Locator {
        return this.page.getByRole('link', { name: 'Cart' })
        }


    async verify_cart_items(): Promise<void> {
        await this.verify_product_01.waitFor({ state: 'visible' });
        await this.verify_product_02.waitFor({ state: 'visible' });
        await this.verify_quanlity_01.waitFor({ state: 'visible' });
        await this.verify_quanlity_02.waitFor({ state: 'visible' });
    }

//      await expect(page.locator(`[data-product-id="${product_ID}"]`)).toBeVisible();
//       await expect(page.locator(`[data-product-id="${product_ID + 1}"]`)).toBeVisible();
//page.locator('#product-1').getByRole('link', { name: 'Blue Top' })



}