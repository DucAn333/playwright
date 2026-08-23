/**
 * Kiểu dữ liệu mô tả một test case cho chức năng Đăng ký (Register/Signup).
 * Dùng cho Data Driven Testing đọc từ data/registerData.csv.
 *
 * Lưu ý: Dữ liệu đọc trực tiếp từ CSV luôn ở dạng string (kể cả checkbox
 * "true"/"false"), việc chuẩn hoá kiểu boolean thực sự được thực hiện
 * trong RegisterPage (String(val).toLowerCase() === 'true').
 */
export interface RegisterTestCase {
  testCaseName: string;

  // Bước 1: Form Signup sơ bộ (trang /login)
  name: string;
  email: string;

  // Bước 2: Form Account Information
  password: string;
  title: 'Mr' | 'Mrs' | '';
  day: string;
  month: string;
  year: string;
  newsletter: string; // "true" | "false" (string thô từ CSV)
  specialOffers: string; // "true" | "false" (string thô từ CSV)

  // Bước 2: Address Information
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;

  // Kết quả mong đợi
  expectedResult: 'success' | 'failure';
  expectedErrorMessage?: string;
}
