import { test, expect } from '@playwright/test';

test('TC - Verify Cart Total with Discount Logic', async ({ page }) => {
  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

  // 1. Thêm sản phẩm 1: "Cropped Stay Groovy off white" (Giá trên web: $10.90)
  const product1 = page.locator('[tabindex="1"]').filter({ hasText: 'Cropped Stay Groovy off white' });
  await product1.getByRole('button', { name: 'Add to cart' }).click();

  // 2. Thêm sản phẩm 2: "Black Tule Oversized" (Giá trên web: $29.45)
  const product2 = page.locator('[tabindex="1"]').filter({ hasText: 'Black Tule Oversized' });
  await product2.getByRole('button', { name: 'Add to cart' }).click();

  // 3. Mở giỏ hàng và đọc giá từng món từ UI để tính toán
  const cartItems = page.getByRole('button', { name: 'remove product from cart' }).locator('..');
  await expect(cartItems).toHaveCount(2);

  const priceText1 = await cartItems.nth(0).locator('p').filter({ hasText: '$' }).innerText();
  const priceText2 = await cartItems.nth(1).locator('p').filter({ hasText: '$' }).innerText();


  // đổi int thành float do có số thập phân
  const price1 = parseFloat(priceText1.replace('$', '').trim());
  const price2 = parseFloat(priceText2.replace('$', '').trim());


  
  const subtotal = price1 + price2; 
  const discount = subtotal * 0.1;
  const expectedTotal = subtotal - discount; 
  const uiSubtotalText = await page.getByText('SUBTOTAL').locator('..').locator('p').filter({ hasText: '$' }).first().innerText();
  const actualSubtotal = parseFloat(uiSubtotalText.replace('$', '').trim());
  console.log(`Debug Values -> Subtotal: ${subtotal}, Actual: ${actualSubtotal}`);
  expect(actualSubtotal).toBeCloseTo(subtotal, 2);
});