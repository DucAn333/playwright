function generateRandomName(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    
    const randomChars = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    
    return `${randomChars}`;
}
function generateRandomEmail(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    
    const randomChars = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const randomNums = Array.from({ length: 2 }, () => nums[Math.floor(Math.random() * nums.length)]).join('');
    
    return `${randomChars}${randomNums}@gmail.com`;
}
function generateRandomPassword(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    const special_char = '@#$&'
    const randomChars = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const randomNums = Array.from({ length: 3 }, () => nums[Math.floor(Math.random() * nums.length)]).join('');
    const randomSpecialChars = Array.from({ length: 1 }, () => nums[Math.floor(Math.random() * special_char.length)]).join('');
    
    return `${randomChars}${randomSpecialChars}${randomNums}`;
}
function generateRandomLastName(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const randomChars = Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join('').toUpperCase();
    return `${randomChars}`;
}
function generateRandomPhoneNumber(): string {
    const nums = '0123456789';
    const randomChars = Array.from({ length: 7 }, () => nums[Math.floor(Math.random() * nums.length)]).join('');
    return `090${randomChars}`;
}
function randomBirthYear(): number {
  const min = 1990;
  const max = 2008;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomMonth(): number {
  return Math.floor(Math.random() * 12) + 1;
}
// random ngày từ ngày 1-27, để chắc chắn khớp với tất cả các tháng
function randomDayOfMonth(): number {
  const min = 1;
  const max = 27;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const randomEmail = generateRandomEmail();
export const randomName = generateRandomName();
export const randomPassword = generateRandomPassword();
export const lastName = generateRandomLastName();
export const phone = generateRandomPhoneNumber();
export const year = String(randomBirthYear());
export const month =  String(randomMonth());
export const days = String(randomDayOfMonth());