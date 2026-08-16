import { Page } from '@playwright/test';
import { cart_page } from '../../page/bai14/add_to_cart';
import { product_info } from '../../page/bai14/productInfo';
import { SignUp } from '../../page/bai14/sign_up';
import { account , comment , card_payment_info } from '../../type/bai14/bai14.data'
import { add_payment } from '../../page/bai14/add_card_payment';


// de het vao 1 class cho tien :))

export class aciton {
    private cart_page : cart_page;
    private productInfo : product_info;
    private signUp : SignUp;
    private addPayment : add_payment;

    constructor(page: Page) {
        this.cart_page = new cart_page(page);
        this.productInfo = new product_info(page);
        this.signUp = new SignUp(page);
        this.addPayment = new add_payment(page);
    }
    
    async open_product():Promise<void>{
        await this.cart_page.Icon_product.click();
    }
    async search_product(nameProduct: string):Promise<void>{
        await this.cart_page.search_input.clear();
        await this.cart_page.search_input.pressSequentially(nameProduct);
        await this.cart_page.search_submit.click();
    }
    
    async go_to_cart():Promise<void>{
        await this.cart_page.product.nth(0).hover();
        await this.cart_page.product.nth(0).click();
    
    }
    async viewProduct():Promise<void>{
        await this.productInfo.productInfo.dblclick(); 
        // sử dụng double click vì thi thoảng button hay bị lỗi, db click để chắc chắn hện pop-up
    }
    async fillQuantily(quantily : string):Promise<void>{
        await this.productInfo.quanlity_input.clear();
        await this.productInfo.quanlity_input.pressSequentially(quantily);
        await this.productInfo.add_to_cart.click();
        await this.productInfo.view_cart.click();
    }
    async continue_shoping():Promise<void>{
        await this.cart_page.continue_shoping_pop_up.click();
    }
    async view_cart():Promise<void>{
        await this.cart_page.view_cart_pop_up.click();
    }
    async go_to_login_affter_cart():Promise<void>{
        await this.cart_page.check_out_btn.click();
        
        await this.cart_page.go_to_login.click();
    }
    async sign_up_new_account():Promise<void>{

        await this.signUp.sign_up_name_input.pressSequentially(account.name);
        await this.signUp.sign_up_email_input.pressSequentially(account.email);
        await this.signUp.sign_up_btn.click();
    }
    async fill_new_account():Promise<void>{
        await this.signUp.Mr_radio.check();
        await this.signUp.create_password_input.pressSequentially(account.password);
        await this.signUp.day_droplist.selectOption(account.day);
        await this.signUp.month_droplist.selectOption(account.month);
        await this.signUp.year_droplist.selectOption(account.year);
        await this.signUp.sign_up_radio.check();
        await this.signUp.receive_radio.check();
        await this.signUp.firt_name_input.pressSequentially(account.firtName);
        await this.signUp.last_name_input.pressSequentially(account.lastName);
        await this.signUp.address_name_input.pressSequentially(account.address);
        await this.signUp.country_name_input.selectOption(account.country);
        await this.signUp.state_input.pressSequentially(account.state);
        await this.signUp.city_input.pressSequentially(account.city);
        await this.signUp.zipcode_input.pressSequentially(account.zipcode);
        await this.signUp.mobile_number_input.pressSequentially(account.mobileNumber)
        await this.signUp.create_account_btn.click();
        await this.signUp.continue_affer_sign_up.click();
        await this.signUp.verify_account.isVisible();
    }
    async go_to_add_payment():Promise<void>{
        await this.addPayment.icon_card.click();
        await this.cart_page.check_out_btn.click();
        
        await this.addPayment.comment_input.pressSequentially(comment);
        await this.addPayment.Place_oder_btn.click();
        
    }
    async add_payment():Promise<void>{
        
        await this.addPayment.Name_on_card_input.pressSequentially(card_payment_info.name_on_card);
        await this.addPayment.card_number_input.pressSequentially(card_payment_info.card_number);
        await this.addPayment.CVC_input.pressSequentially(card_payment_info.CVC);
        await this.addPayment.expiry_month_input.pressSequentially(card_payment_info.month_Expiration);
        await this.addPayment.expiry_year_input.pressSequentially(card_payment_info.year_Expiration);
        await this.addPayment.payment_and_confirm_btn.click();
        await this.addPayment.verify_oder.isVisible();
        
        
    }
    async delete_account():Promise<void>{
        await this.signUp.delete_account_btn.click();
        
    }
    async go_to_sign_up_new_account():Promise<void>{
        await this.signUp.Login_icon.click();
        await this.signUp.sign_up_name_input.pressSequentially(account.name);
        await this.signUp.sign_up_email_input.pressSequentially(account.email);
        await this.signUp.sign_up_btn.click();
    }
    async go_to_check_out():Promise<void>{
        await this.cart_page.check_out_btn.click();
        await this.addPayment.comment_input.pressSequentially(comment);
        
    }

}