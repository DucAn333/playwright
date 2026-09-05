# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tesst_script.spec.ts >> login - alert có thể có hoặc không
- Location: tests\tesst_script.spec.ts:6:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: page.fill: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('#username')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1   | /// <reference types="node" />
  2   | import { test, expect } from '@playwright/test';
  3   | import fs from 'fs';
  4   | import path from 'path';
  5   | 
  6   | test('login - alert có thể có hoặc không', async ({ page }) => {
  7   |   let alertAppeared = false;
  8   |   let alertMessage = '';
  9   | 
  10  |   // Đăng ký lắng nghe TRƯỚC, không quan tâm alert có xảy ra hay không
  11  |   page.on('dialog', async (dialog) => {
  12  |     alertAppeared = true;
  13  |     alertMessage = dialog.message();
  14  |     await dialog.accept();
  15  |   });
  16  | 
  17  |   await page.goto('https://example.com/login');
> 18  |   await page.fill('#username', 'user');
      |              ^ Error: page.fill: Test timeout of 50000ms exceeded.
  19  |   await page.fill('#password', 'pass');
  20  |   await page.getByRole('button', { name: 'Login' }).click();
  21  | 
  22  |   // Chờ 1 chút để đảm bảo alert (nếu có) đã kịp trigger
  23  |   await page.waitForTimeout(500);
  24  | 
  25  |   if (alertAppeared) {
  26  |     console.log('Alert xuất hiện với nội dung:', alertMessage);
  27  |     // xử lý logic khi có alert (VD: login thất bại)
  28  |   } else {
  29  |     console.log('Không có alert, login thành công bình thường');
  30  |     // xử lý logic khi không có alert (VD: kiểm tra đã vào trang chủ)
  31  |     await expect(page).toHaveURL(/dashboard/);
  32  |   }
  33  | });
  34  | test('arlet', async ({ page }) => {
  35  |   
  36  | 
  37  |   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  38  | 
  39  |    page.once('dialog', async dialog => {
  40  |         expect(dialog.type());
  41  |         expect(dialog.message());
  42  | 
  43  |         await dialog.dismiss();
  44  |         // await dialog.accept();
  45  |     });
  46  | 
  47  |   await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  48  | 
  49  | 
  50  | });
  51  | test('arlet_sendkkey', async ({ page }) => {
  52  |   
  53  | await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  54  | 
  55  | await page.once('dialog', async dialog => {
  56  |     
  57  | 
  58  |     await dialog.accept("Nguyen An");
  59  | });
  60  | 
  61  | await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  62  | 
  63  | });
  64  | test('keo_chuot', async ({ page }) => {
  65  |   
  66  | await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  67  | 
  68  | const a = await page.locator('#column-a');
  69  | const b = await page.locator('#column-b');
  70  | 
  71  | await page.waitForTimeout(2000);
  72  | 
  73  | await a.dragTo(b);
  74  | 
  75  | 
  76  | 
  77  | });
  78  | test('new_tab', async ({ page }) => {
  79  |   
  80  | await page.goto('https://the-internet.herokuapp.com/windows');
  81  | 
  82  | await page.getByRole('link', { name: 'Click Here' }).click();
  83  | const [newPage] = await Promise.all([
  84  |     page.context().waitForEvent('page'),
  85  |     
  86  | ]);
  87  | await expect(newPage.getByRole('heading', { name: 'New Window', level: 3 })).toBeVisible();
  88  | await newPage.waitForTimeout(2000);
  89  | await newPage.close();
  90  | await page.close();
  91  | 
  92  | });
  93  | 
  94  | test('download_kiemtra_xoá', async ({ page }) => {
  95  |   await page.goto('https://the-internet.herokuapp.com/download');
  96  | 
  97  | 
  98  |   // thuc hien download
  99  |   const downloadPromise = page.waitForEvent('download');
  100 |   await page.getByRole('link', { name: 'IMG_9170.JPG' }).click();
  101 | 
  102 | 
  103 | // lay thong tin file da tai
  104 |   const download = await downloadPromise;
  105 |   const suggestedFilename = download.suggestedFilename();
  106 | 
  107 | 
  108 | // bẫy sự kiện, xử lỹ khi download, settup vị trí thư mục luôn
  109 |   const downloadsDir = path.join(process.cwd(), 'file/download');
  110 |   await fs.promises.mkdir(downloadsDir, { recursive: true });
  111 | 
  112 | 
  113 |   // lưu đúng vị trí
  114 |   const savePath = path.join(downloadsDir, suggestedFilename);
  115 |   await download.saveAs(savePath);
  116 | 
  117 |   // kiểm tra file
  118 |   const stats = await fs.promises.stat(savePath);
```