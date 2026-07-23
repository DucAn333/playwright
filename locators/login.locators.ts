import { Page } from '@playwright/test';


interface form_data {
  email:string,
  password:string
}

export const Data_account: form_data[] =  [
  
    {
      email: 'nguyenducan03.tm@gmail.com',
      password: 'hy6NtJTSyWD@4fY'
    },
    // {
    //   email: 'nguyenducan.tm@gmail.com',
    //   password: 'hy6NtJTSyWD@4f'
    // }
  
  ];

export const Login_page = (page: Page) => ({
  sign_up: page.getByRole('link', { name: 'Signup / Login' }),
  Email_text_box: page.locator('[data-qa="login-email"]'),
  Password_text_box:page.locator('[data-qa="login-password"]'),
  text_login: page.getByRole('heading', { name: 'Login to your account', level: 2 }),
  login_button: page.locator('[data-qa="login-button"]'),
  verify: page.getByText('Logged in as', { exact: true }),
  check: page.getByRole('link', { name: 'Logout' })

});


