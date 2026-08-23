import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LoginPage - Page Object cho chức năng Đăng nhập tại /login.
 * Mọi selector được giới hạn trong khối .login-form để tránh nhầm lẫn
 * với form Signup (.signup-form) cùng nằm trên trang này.
 */
export class LoginPage extends BasePage {
  private readonly loginForm: Locator;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly loggedInIndicator: Locator; // menu "Logged in as <username>"
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);

    this.loginForm = page.locator('.login-form');

    this.emailInput = this.loginForm.locator('input[data-qa="login-email"]');
    this.passwordInput = this.loginForm.locator('input[data-qa="login-password"]');
    this.loginButton = this.loginForm.locator('button[data-qa="login-button"]');
    this.errorMessage = this.loginForm.locator('p:has-text("Your email or password is incorrect!")');

    this.loggedInIndicator = page.locator('a:has-text("Logged in as")');
    this.logoutLink = page.locator('a[href="/logout"]');
  }

  /** Đi tới trang đăng nhập (/login). */
  async goto(): Promise<void> {
    await this.navigate('/login');
  }

  /** Nhập địa chỉ Email. */
  async fillEmail(email: string): Promise<void> {
    await this.fillField(this.emailInput, email);
  }

  /** Nhập Mật khẩu. */
  async fillPassword(password: string): Promise<void> {
    await this.fillField(this.passwordInput, password);
  }

  /** Nhấp chọn nút Login. */
  async clickLogin(): Promise<void> {
    await this.clickElement(this.loginButton);
  }

  /** Thực thi một luồng đăng nhập hoàn chỉnh: điền form và submit. */
  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  /** Lấy nội dung thông báo lỗi khi đăng nhập thất bại. */
  async getErrorMessage(): Promise<string> {
    return this.getElementText(this.errorMessage);
  }

  /** Kiểm tra thông báo lỗi có hiển thị trực quan hay không. */
  async isErrorMessageVisible(): Promise<boolean> {
    return this.isElementVisible(this.errorMessage);
  }

  /**
   * Kiểm tra trạng thái đăng nhập thành công: xác thực menu
   * "Logged in as <username>" hoặc nút Logout hiển thị.
   */
  async isLoggedIn(): Promise<boolean> {
    const [loggedInVisible, logoutVisible] = await Promise.all([
      this.loggedInIndicator.isVisible().catch(() => false),
      this.logoutLink.isVisible().catch(() => false),
    ]);
    return loggedInVisible || logoutVisible;
  }
}
