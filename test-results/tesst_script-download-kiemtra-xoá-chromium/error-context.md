# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tesst_script.spec.ts >> download_kiemtra_xoá
- Location: tests\tesst_script.spec.ts:94:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 50000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Downloader" [level=3] [ref=e8]
      - link "t1.txt" [ref=e9] [cursor=pointer]:
        - /url: download/t1.txt
      - link "random_data_18.txt" [ref=e10] [cursor=pointer]:
        - /url: download/random_data_18.txt
      - link "dinner.txt" [ref=e11] [cursor=pointer]:
        - /url: download/dinner.txt
      - link "Images.txt" [ref=e12] [cursor=pointer]:
        - /url: download/Images.txt
      - link "checkup-1788584757-ve4w.txt" [ref=e13] [cursor=pointer]:
        - /url: download/checkup-1788584757-ve4w.txt
      - link "archivo-de-prueba.txt" [ref=e14] [cursor=pointer]:
        - /url: download/archivo-de-prueba.txt
      - link "final_paper (2) (2).pdf" [ref=e15] [cursor=pointer]:
        - /url: download/final_paper (2) (2).pdf
      - link "sample-upload.txt" [ref=e16] [cursor=pointer]:
        - /url: download/sample-upload.txt
      - link "playwright.png" [ref=e17] [cursor=pointer]:
        - /url: download/playwright.png
      - link "upload-marker.txt" [ref=e18] [cursor=pointer]:
        - /url: download/upload-marker.txt
      - link "stand.txt" [ref=e19] [cursor=pointer]:
        - /url: download/stand.txt
      - link "upload-sample.txt" [ref=e20] [cursor=pointer]:
        - /url: download/upload-sample.txt
      - link "git-cheatsheet.pdf" [ref=e21] [cursor=pointer]:
        - /url: download/git-cheatsheet.pdf
      - link "pw-disk-upload.txt" [ref=e22] [cursor=pointer]:
        - /url: download/pw-disk-upload.txt
      - link "testUpload.json" [ref=e23] [cursor=pointer]:
        - /url: download/testUpload.json
      - link "upload-test.txt" [ref=e24] [cursor=pointer]:
        - /url: download/upload-test.txt
      - link "login_test_data.csv" [ref=e25] [cursor=pointer]:
        - /url: download/login_test_data.csv
      - link "upload_sample.txt" [ref=e26] [cursor=pointer]:
        - /url: download/upload_sample.txt
      - link "smoke-test.png" [ref=e27] [cursor=pointer]:
        - /url: download/smoke-test.png
      - link "DummyFile.txt" [ref=e28] [cursor=pointer]:
        - /url: download/DummyFile.txt
      - link "form2.pdf" [ref=e29] [cursor=pointer]:
        - /url: download/form2.pdf
      - link "temp_upload.txt" [ref=e30] [cursor=pointer]:
        - /url: download/temp_upload.txt
      - link "targetScreenshot (3).png" [ref=e31] [cursor=pointer]:
        - /url: download/targetScreenshot (3).png
      - link "DeloitteIDCard.jpeg" [ref=e32] [cursor=pointer]:
        - /url: download/DeloitteIDCard.jpeg
      - link "gauntlet.txt" [ref=e33] [cursor=pointer]:
        - /url: download/gauntlet.txt
      - link "myfile.txt" [ref=e34] [cursor=pointer]:
        - /url: download/myfile.txt
      - link "laporan-bulanan.txt" [ref=e35] [cursor=pointer]:
        - /url: download/laporan-bulanan.txt
      - link "upload.txt" [ref=e36] [cursor=pointer]:
        - /url: download/upload.txt
      - link "pdf-1mb.pdf" [ref=e37] [cursor=pointer]:
        - /url: download/pdf-1mb.pdf
      - link "random_data_17.txt" [ref=e38] [cursor=pointer]:
        - /url: download/random_data_17.txt
      - link "sample.txt" [ref=e39] [cursor=pointer]:
        - /url: download/sample.txt
      - link "test-upload.txt" [ref=e40] [cursor=pointer]:
        - /url: download/test-upload.txt
      - link "some-file.txt" [ref=e41] [cursor=pointer]:
        - /url: download/some-file.txt
      - link "QA_Interview_Prep_Chathuni.docx" [ref=e42] [cursor=pointer]:
        - /url: download/QA_Interview_Prep_Chathuni.docx
      - link "MODULE_2_MSS.pdf" [ref=e43] [cursor=pointer]:
        - /url: download/MODULE_2_MSS.pdf
      - link "upload_test.txt" [ref=e44] [cursor=pointer]:
        - /url: download/upload_test.txt
      - link "python-3.13.15-amd64.exe" [ref=e45] [cursor=pointer]:
        - /url: download/python-3.13.15-amd64.exe
      - link "ICICIS2026_Paper1097_Presentation.pptx" [ref=e46] [cursor=pointer]:
        - /url: download/ICICIS2026_Paper1097_Presentation.pptx
      - link "test-file.txt" [ref=e47] [cursor=pointer]:
        - /url: download/test-file.txt
      - link "test_upload.txt" [ref=e48] [cursor=pointer]:
        - /url: download/test_upload.txt
      - link "playwright-test.txt" [ref=e49] [cursor=pointer]:
        - /url: download/playwright-test.txt
      - link "operation.txt" [ref=e50] [cursor=pointer]:
        - /url: download/operation.txt
      - link "file.txt" [ref=e51] [cursor=pointer]:
        - /url: download/file.txt
      - link "AlgoTest_Conversation.docx" [ref=e52] [cursor=pointer]:
        - /url: download/AlgoTest_Conversation.docx
      - link "dummy-upload.txt" [ref=e53] [cursor=pointer]:
        - /url: download/dummy-upload.txt
      - link "evidence.txt" [ref=e54] [cursor=pointer]:
        - /url: download/evidence.txt
      - link "playwright-upload.txt" [ref=e55] [cursor=pointer]:
        - /url: download/playwright-upload.txt
      - link "sample.pdf" [ref=e56] [cursor=pointer]:
        - /url: download/sample.pdf
  - generic [ref=e58]:
    - separator [ref=e59]
    - generic [ref=e60]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e61] [cursor=pointer]:
        - /url: http://elementalselenium.com/
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
  18  |   await page.fill('#username', 'user');
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
> 99  |   const downloadPromise = page.waitForEvent('download');
      |                                ^ Error: page.waitForEvent: Test timeout of 50000ms exceeded.
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
  119 |   expect(stats.isFile()).toBeTruthy();
  120 |   expect(stats.size).toBeGreaterThan(0);
  121 | 
  122 |   //Nếu muốn xóa file ngay sau khi kiểm tra:
  123 |   await fs.promises.unlink(savePath);
  124 | 
  125 |   let exists = true;
  126 |   try {
  127 |     await fs.promises.access(savePath);
  128 |   } catch {
  129 |     exists = false;
  130 |   }
  131 |   expect(exists).toBe(false);
  132 | });
  133 | 
  134 | test('upload', async ({ page }) => {
  135 |   const fileName = 'IMG.JPG';  // tên file cần upload
  136 | 
  137 |   //kiem tra file co ton tai khong
  138 |   const filePath = path.join(process.cwd(), 'file/upload', fileName);// đường dẫn tuyệt đối đến file
  139 | 
  140 |   const exists = await fs.promises.access(filePath).then(() => true).catch(() => false);
  141 |   expect(exists).toBe(true);
  142 | 
  143 | 
  144 |   // thuc hien upload
  145 |   await page.goto('https://the-internet.herokuapp.com/upload');
  146 | 
  147 |   await page.locator('#file-upload').setInputFiles(filePath);
  148 |   await page.getByRole('button', { name: 'Upload' }).click();
  149 | 
  150 |   await expect(page.locator('h3')).toHaveText('File Uploaded!');
  151 |   await expect(page.locator('#uploaded-files')).toContainText(fileName);
  152 | 
  153 |   await page.waitForTimeout(2000);
  154 |   await page.close();
  155 | });
  156 | 
  157 | 
```