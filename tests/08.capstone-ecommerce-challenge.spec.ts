
/**
 * =============================================================================
 * 👑 LAB 8 (CAPSTONE CHALLENGE): DEBUG & XỬ LÝ FLAKY TESTS + ASSERTION BUGS
 * =============================================================================
 * 🌐 Trang web mục tiêu: https://automationexercise.com
 * 
 * 📋 ĐỀ BÀI:
 * Kịch bản tổng hợp mô phỏng trọn vẹn luồng E-Commerce gồm 6 test cases đang gặp lỗi:
 *  1. 🌟 Flow 1 (New user registration): TESTCASE DUY NHẤT BỊ FLAKY.
 *     - Hiện tượng: Lần 1 server chưa nạp kịp form => FAIL. Lần 2 (retry) nạp kịp => PASS.
 *     - Nhiệm vụ: loại bỏ Flaky.
 *  2. 🔴 Flow 2 -> Flow 6: MỖI TESTCASE CHỨA 2 - 3 CHỖ BỊ FAILED (Sai kỳ vọng Assertion).
 *     - Nhiệm vụ: Đọc log lỗi trên Terminal / HTML Report, đối chiếu thực tế trang web và sửa
 *       đúng toàn bộ các kỳ vọng assertion để test chạy qua.
 * 
 * 🎯 MỤC TIÊU:
 * Sửa triệt để tất cả các lỗi để khi chạy lại toàn bộ 6 test cases đều PASS 100% (XANH HẾT).
 * 
 * 🚀 CÂU LỆNH CHẠY ĐỂ TÁI HIỆN LỖI (TERMINAL RUN COMMANDS):
 * -----------------------------------------------------------------------------
 * 1️⃣ Chạy riêng Flow 1 để kích hoạt nhãn màu vàng cam [flaky] trên Terminal:
 *    npx playwright test tests/flaky-lab/08.capstone-ecommerce-challenge.spec.ts -g "Flow 1"
 * 
 * 2️⃣ Chạy toàn bộ file để thấy 1 FLAKY và 5 FAILED:
 *    npx playwright test tests/flaky-lab/08.capstone-ecommerce-challenge.spec.ts
 *  
 * 3️⃣ Mở HTML Report để phân tích chi tiết từng điểm lỗi:
 *    npx playwright show-report
 * =============================================================================
 */

import { test, expect } from "@playwright/test";

test.describe("Lab 8 - Capstone Challenge: E-Commerce Flow Verification", () => {
  test("Flow 1 - New user registration", async ({ page }) => {
    await page.goto("https://automationexercise.com/login");

    const dynamicEmail = `tester_${Date.now()}_${Math.floor(Math.random() * 1000)}@test.com`;
    await page.locator('[data-qa="signup-name"]').fill("Tester Capstone");
    await page.locator('[data-qa="signup-email"]').fill(dynamicEmail);

    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.locator('b:has-text("Enter Account Information")')).toBeVisible({ timeout: 15000 });
  });

  test("Flow 2 - Search products by keyword", async ({ page }) => {
    await page.goto("https://automationexercise.com/products");

    await page.locator("#search_product").fill("Dress");
    await page.locator("#submit_search").click();

    const titleText = await page.locator(".features_items h2.title").innerText();
    expect.soft(titleText).toBe("SEARCHED PRODUCTS");

    const productCount = await page.locator(".features_items .col-sm-4").count();
    expect.soft(productCount).toBe(9);

    const firstProductName = await page.locator(".features_items .productinfo p").first().innerText();
    expect.soft(firstProductName).toBe("Sleeveless Dress");
  });

  test("Flow 3 - Add products and verify modal dialog", async ({ page }) => {
    await page.goto("https://automationexercise.com/products");

    await page.locator(".add-to-cart").first().click();

    const modalTitle = await page.locator("#cartModal .modal-title").innerText();
    expect.soft(modalTitle).toBe("Added!");

    const continueBtnText = await page.locator("#cartModal button").innerText();
    expect.soft(continueBtnText).toBe("Continue Shopping");

    await page.getByRole("button", { name: "Continue Shopping" }).click();
    await page.goto("https://automationexercise.com/view_cart");

    const rowCount = await page.locator("#cart_info_table tbody tr").count();
    expect.soft(rowCount).toBe(1);
  });

  test("Flow 4 - Remove product from cart", async ({ page }) => {
    await page.goto("https://automationexercise.com/products");

    await page.locator(".add-to-cart").nth(0).click();
    await page.getByRole("button", { name: "Continue Shopping" }).click();
    await page.locator("#cartModal").waitFor({ state: "hidden" });

    await page.goto("https://automationexercise.com/view_cart");

    const ClearBtn = page.locator(".cart_quantity_delete");
    const Count = await ClearBtn.count();
    for (let i = 0; i < Count; i++) {
      await ClearBtn.nth(i).click();
    }
    //await page.waitForTimeout(500);

   await Promise.all([
    expect(page.locator("#cart_info_table tbody tr")).toHaveCount(0),
    expect(page.locator("#empty_cart b")).toHaveText("Cart is empty!"),
    expect(page.locator("#empty_cart a")).toHaveText("here")
]);
  });

  test("Flow 5 - Product detail and review form", async ({ page }) => {
    await page.goto("https://automationexercise.com/product_details/1");

    const reviewTabTitle = await page.locator('a[href="#reviews"]').innerText();
    expect.soft(reviewTabTitle).toBe("WRITE YOUR REVIEW");

    const namePlaceholder = await page.locator("#name").getAttribute("placeholder");
    expect.soft(namePlaceholder).toBe("Your Name");

    const emailPlaceholder = await page.locator("#email").getAttribute("placeholder");
    expect.soft(emailPlaceholder).toBe("Email Address");
  });

  test("Flow 6 - Footer newsletter subscription", async ({ page }) => {
    await page.goto("https://automationexercise.com");

    const subscribeInput = page.locator("#susbscribe_email");
    await subscribeInput.scrollIntoViewIfNeeded();

    const headingText = await page.locator(".single-widget h2").first().innerText();
    expect.soft(headingText).toBe("SUBSCRIPTION");

    const placeholder = await subscribeInput.getAttribute("placeholder");
    expect.soft(placeholder).toBe("Your email address");

    await subscribeInput.fill("student_tester@test.com");
    await page.locator("#subscribe").click();
   

    const successMsg = await page.locator("#success-subscribe").innerText();
    expect.soft(successMsg).toBe("You have been successfully subscribed!");
  });
});