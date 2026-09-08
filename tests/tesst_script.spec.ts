/// <reference types="node" />
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// test('login - alert có thể có hoặc không', async ({ page }) => {
//   let alertAppeared = false;
//   let alertMessage = '';

//   // Đăng ký lắng nghe TRƯỚC, không quan tâm alert có xảy ra hay không
//   page.on('dialog', async (dialog) => {
//     alertAppeared = true;
//     alertMessage = dialog.message();
//     await dialog.accept();
//   });

//   await page.goto('https://example.com/login');
//   await page.fill('#username', 'user');
//   await page.fill('#password', 'pass');
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Chờ 1 chút để đảm bảo alert (nếu có) đã kịp trigger
//   await page.waitForTimeout(500);

//   if (alertAppeared) {
//     console.log('Alert xuất hiện với nội dung:', alertMessage);
//     // xử lý logic khi có alert (VD: login thất bại)
//   } else {
//     console.log('Không có alert, login thành công bình thường');
//     // xử lý logic khi không có alert (VD: kiểm tra đã vào trang chủ)
//     await expect(page).toHaveURL(/dashboard/);
//   }
// });
test('arlet', async ({ page }) => {
  

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

   page.once('dialog', async dialog => {
        expect(dialog.type());
        expect(dialog.message());

        await dialog.dismiss();
        // await dialog.accept();
    });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();


});
test('arlet_sendkkey', async ({ page }) => {
  
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

await page.once('dialog', async dialog => {
    

    await dialog.accept("Nguyen An");
});

await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

});
test('keo_chuot', async ({ page }) => {
  
await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

const a = await page.locator('#column-a');
const b = await page.locator('#column-b');

await page.waitForTimeout(2000);

await a.dragTo(b);



});
test('new_tab', async ({ page }) => {
  
await page.goto('https://the-internet.herokuapp.com/windows');

await page.getByRole('link', { name: 'Click Here' }).click();
const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    
]);
await expect(newPage.getByRole('heading', { name: 'New Window', level: 3 })).toBeVisible();
await newPage.waitForTimeout(2000);
await newPage.close();
await page.close();

});

test('download_kiemtra_xoá', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');


  // thuc hien download
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'IMG_9170.JPG' }).click();


// lay thong tin file da tai
  const download = await downloadPromise;
  const suggestedFilename = download.suggestedFilename();


// bẫy sự kiện, xử lỹ khi download, settup vị trí thư mục luôn
  const downloadsDir = path.join(process.cwd(), 'file/download');
  await fs.promises.mkdir(downloadsDir, { recursive: true });


  // lưu đúng vị trí
  const savePath = path.join(downloadsDir, suggestedFilename);
  await download.saveAs(savePath);

  // kiểm tra file
  const stats = await fs.promises.stat(savePath);
  expect(stats.isFile()).toBeTruthy();
  expect(stats.size).toBeGreaterThan(0);

  //Nếu muốn xóa file ngay sau khi kiểm tra:
  await fs.promises.unlink(savePath);

  let exists = true;
  try {
    await fs.promises.access(savePath);
  } catch {
    exists = false;
  }
  expect(exists).toBe(false);
});

test('upload', async ({ page }) => {
  const fileName = 'IMG.JPG';  // tên file cần upload

  //kiem tra file co ton tai khong
  const filePath = path.join(process.cwd(), 'file/upload', fileName);// đường dẫn tuyệt đối đến file

  const exists = await fs.promises.access(filePath).then(() => true).catch(() => false);
  expect(exists).toBe(true);


  // thuc hien upload
  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload').setInputFiles(filePath);
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toContainText(fileName);

  await page.waitForTimeout(2000);
  await page.close();
  
});

