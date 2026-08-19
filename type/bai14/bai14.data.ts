
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
const randomEmail = generateRandomEmail();
const randomName = generateRandomName();
const randomPassword = generateRandomPassword();
const lastName = generateRandomLastName();
const phone = generateRandomPhoneNumber();


//====data config====

export const product_name = {
    product01: 'Blue Top',
    product02: 'Men Tshirt',
};

export const quanlity = '4';
//co the dung random de tao tiep ngay thang nam, nhung em luoi :D

export const account = {
    name:randomName,
    email:randomEmail,
    password:randomPassword,
    day:'3',
    month:'3',
    year:'2000',
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