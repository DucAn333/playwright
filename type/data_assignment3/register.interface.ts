
export interface RegisterTestCase {
  testCaseName: string;

 
  name: string;
  email: string;
  Go_to_info: string;


  password: string;
  title: 'Mr' | 'Mrs' | '';
  day: string;
  month: string;
  year: string;
  newsletter: string; 
  specialOffers: string; 

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


  expectedResult: 'success' | 'failure';
  expectedErrorMessage?: string;
}
