import {  randomEmail , randomName , randomPassword , lastName , phone , year , month , days} from '../../type/bai14/bai14.customData';

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
