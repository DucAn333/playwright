import { Page, Locator } from '@playwright/test';

/**
 * BasePage - Lớp cơ sở đóng gói các thao tác dùng chung với trình duyệt.
 * Mọi Page Object khác (LoginPage, RegisterPage, ...) đều kế thừa từ lớp này.
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Điều hướng tới một URL cụ thể.
   * Dùng waitUntil: 'domcontentloaded' để tối ưu tốc độ và tránh timeout
   * (không cần đợi toàn bộ tài nguyên như ảnh, font tải xong).
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  /** Nhấp chuột trái vào một phần tử chỉ định. */
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Nhập giá trị vào trường văn bản.
   * Yêu cầu đặc biệt: nếu value là chuỗi rỗng ("") thì phải clear() trường
   * thay vì bỏ qua hoặc fill chuỗi rỗng một cách "im lặng".
   */
  async fillField(locator: Locator, value: string): Promise<void> {
    if (value === '') {
      await locator.clear();
      return;
    }
    await locator.fill(value);
  }

  /** Chọn một giá trị từ thẻ <select> (dropdown). */
  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  /** Chọn hộp kiểm (checkbox) nếu đang chưa được chọn. */
  async checkCheckbox(locator: Locator): Promise<void> {
    await locator.check();
  }

  /** Bỏ chọn hộp kiểm (checkbox) nếu đang được chọn. */
  async uncheckCheckbox(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  /** Lấy nội dung văn bản bên trong của một phần tử. */
  async getElementText(locator: Locator): Promise<string> {
    return (await locator.textContent())?.trim() ?? '';
  }

  /** Xác thực phần tử có đang hiển thị trực quan hay không. */
  async isElementVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  /** Đợi cho phần tử hiển thị trên giao diện theo một khoảng thời gian chờ tùy chọn. */
  async waitForElement(locator: Locator, timeout?: number): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /** Lấy tiêu đề hiện tại của trang web đang mở. */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
}
