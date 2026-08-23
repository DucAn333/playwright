/**
 * Kiểu dữ liệu mô tả một test case cho chức năng Đăng nhập (Login).
 * Dùng cho Data Driven Testing đọc từ data/loginData.json.
 */
export interface LoginTestCase {
  /** Tên/mô tả ngắn gọn của test case */
  testCaseName: string;
  /** Email dùng để đăng nhập (có thể để trống "" hoặc sai định dạng) */
  email: string;
  /** Mật khẩu dùng để đăng nhập (có thể để trống "") */
  password: string;
  /** Kết quả mong đợi: 'success' hoặc 'failure' */
  expectedResult: 'success' | 'failure';
  /** Thông báo lỗi mong đợi khi expectedResult = 'failure' (tuỳ chọn) */
  expectedErrorMessage?: string;
}
