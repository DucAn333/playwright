
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
const randomEmail = generateRandomEmail();
const randomName = generateRandomName();
const randomPassword = generateRandomPassword();
const lastName = generateRandomLastName();
const phone = generateRandomPhoneNumber();
const year = String(randomBirthYear());
const month =  String(randomMonth());
const days = String(randomDayOfMonth());


//====data config====

export const product_name = {
    product01: 'Blue Top',
    product02: 'Men Tshirt',
};

export const quanlity = '4';


export const account = {
    name:randomName,
    email:randomEmail,
    password:randomPassword,
    day: days,
    month: month,
    year: year,
    firtName:randomName,
    lastName:lastName,
    address:'Manchester',
    country:'Singapore',
    state:'man city',
    city:'HaNoi',
    zipcode:'10000',
    mobileNumber:phone,
}
export const comment = ('best product');
export const card_payment_info = {
    name_on_card: 'NguyenDucAn',
    card_number: '0123456',
    CVC:'311',
    month_Expiration:'11',
    year_Expiration:'2030'
}
