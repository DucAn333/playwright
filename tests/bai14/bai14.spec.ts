
import { product_name , quanlity } from '../../type/bai14/bai14.data';
import { indexFixture , test ,  expect } from '../../fixture/bai15/index.fixture';


const link = 'https://automationexercise.com';



test.describe('test case bai 14', () => {
  
  //let action: aciton;

  test.beforeEach(async ({ page }) => {
    // 1. Chặn các request quảng cáo rác để tăng tốc độ load trang
    await page.route('**/*', (route) => {
      const url = route.request().url();

      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('googleads')
      ) 
      {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Khởi tạo Object
    
   // action = new aciton(page); 

    // 3. Điều hướng tới trang web
    await page.goto(link);
    await expect(page).toHaveURL(link);
  });

test('Test_01: them san pham vao gio hang', async ({ addToCart, action}) => {
    
   // const addToCart = new cart_page(page);
    
    await action.open_product();
    await expect(addToCart.verify_product).toBeVisible();
  
    await action.search_product(product_name.product01);
    await action.go_to_cart();
    await action.continue_shoping();
    await action.search_product(product_name.product02);
    await action.go_to_cart();
    await action.view_cart();

    await addToCart.verify_cart_items();
    
});
test('Test_02: xac nhan so luong', async ({ action }) => {
    //let product = new product_info(page);

    await action.open_product();
    await action.search_product(product_name.product01);
    await action.viewProduct();
    await action.fillQuantily(quanlity);
    //await expect(product.get_verify_quanlity).toBeVisible();
});
test('Test_03: xoa san pham khoi gio hang', async ({ action, addToCart }) => {
  //const addToCart = new cart_page(page);
// === them san pham vao gio hang ===    
    await action.open_product();
    await expect(addToCart.verify_product).toBeVisible();
  
    await action.search_product(product_name.product01);
    await action.go_to_cart();
    await action.continue_shoping();
    await action.search_product(product_name.product02);
    await action.go_to_cart();
    await action.view_cart();
// === xoa san pham ===
  const btnClear = addToCart.clear_product_btn;
// su dung vong lap de xoa tat ca cac button x
  while (await btnClear.count() > 0) {
    const firstDeleteBtn = btnClear.first();
    await expect(firstDeleteBtn).toBeVisible();
    await firstDeleteBtn.click();
  
    //await page.waitForTimeout(500);
  }

  await expect(btnClear).toHaveCount(0);
  
});
test('Test_04: dat hang, sau do dang ki tai khoan', async ({  action, addToCart,Sign_up  }) => {
    
    // const addToCart = new cart_page(page);
    // const signUp = new SignUp(page);
    // const addPayment = new add_payment(page)
    
    await action.open_product();
    await expect(addToCart.verify_product).toBeVisible();
  
    await action.search_product(product_name.product01);
    await action.go_to_cart();
    await action.view_cart();
    await expect (addToCart.verify_product_01).toBeVisible();
    
    await action.go_to_login_affter_cart();
    await expect (Sign_up.sign_up_btn).toBeVisible();
    await action.sign_up_new_account();
    await expect (Sign_up.email_input).toBeVisible();
    await action.fill_new_account();
    await action.go_to_add_payment();
    await action.add_payment();
    await action.delete_account();
    await expect(Sign_up.verify_delete_account);
    
});
test('Test_05: xac nhan thong tin thanh toán', async ({action, Sign_up,cardPayment}) => {
    
    // const addToCart = new cart_page(page);
    // const signUp = new SignUp(page);
    // const addPayment = new add_payment(page)
    
    await action.go_to_sign_up_new_account();
    await action.fill_new_account();
    await action.open_product();
    await action.search_product(product_name.product02);
    await action.go_to_cart();
    await action.view_cart();
    await action.go_to_check_out();
    await expect(cardPayment.verify_info).toBeVisible();
    
    await action.delete_account();
    await expect(Sign_up.verify_delete_account);

});
});
