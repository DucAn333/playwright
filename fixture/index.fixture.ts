import { test as baseTest } from '@playwright/test';
import { aciton } from '../helper/bai14/helperbai14';
import { cart_page } from '../page/bai14/add_to_cart';
import { product_info } from '../page/bai14/productInfo';
import { add_payment } from '../page/bai14/add_card_payment';
import { SignUp } from '../page/bai14/sign_up';

export  { expect} from '@playwright/test';
export type indexFixture = {
    action : aciton;
    addToCart : cart_page;
    productInfo :product_info;
    cardPayment:add_payment;
    Sign_up:SignUp;
}

export const test = baseTest.extend<indexFixture>({
    addToCart: async ({ page }, use) => {
        const addToCart = new cart_page(page);
        await use(addToCart);
    },
    action: async ({ page }, use) => {
        const action = new aciton(page);
        await use(action);
    },
    productInfo: async ({ page }, use) => {
        const productInfo = new product_info(page);
        await use(productInfo);
    },
    cardPayment: async ({ page }, use) => {
        const cardPayment = new add_payment(page);
        await use(cardPayment);
    },
    Sign_up: async ({ page }, use) => {
        const signUp = new SignUp(page);
        await use(signUp);
    }
});