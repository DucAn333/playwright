import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { RegisterTestCase } from '../../type/data_assignment3/register.interface';


export class RegisterPage extends BasePage {
  private readonly signupForm: Locator;

 
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly signupErrorMessage: Locator;

  
  readonly titleMrRadio: Locator;
  readonly titleMrsRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysSelect: Locator;
  readonly monthsSelect: Locator;
  readonly yearsSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;

  
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;

  readonly accountCreatedHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.signupForm = page.locator('.signup-form');

    this.signupNameInput = this.signupForm.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = this.signupForm.locator('input[data-qa="signup-email"]');
    this.signupButton = this.signupForm.locator('button[data-qa="signup-button"]');
    this.signupErrorMessage = page.locator('p:has-text("Email Address already exist!")');

    this.titleMrRadio = page.locator('#id_gender1');
    this.titleMrsRadio = page.locator('#id_gender2');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.daysSelect = page.locator('select[data-qa="days"]');
    this.monthsSelect = page.locator('select[data-qa="months"]');
    this.yearsSelect = page.locator('select[data-qa="years"]');
    this.newsletterCheckbox = page.locator('input[name="newsletter"]');
    this.specialOffersCheckbox = page.locator('input[name="optin"]');

    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.companyInput = page.locator('input[data-qa="company"]');
    this.address1Input = page.locator('input[data-qa="address"]');
    this.address2Input = page.locator('input[data-qa="address2"]');
    this.countrySelect = page.locator('select[data-qa="country"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account-button"]');

    this.accountCreatedHeading = page.locator('h2[data-qa="account-created"]');
  }

  /** Đi tới trang đăng ký/đăng nhập (/login). */
  async goto(): Promise<void> {
    await this.navigate('/login');
  }

  /**
   * Nhập Name, Email tại form 'New User Signup!' và bấm nút Signup.
   */
  async fillSignupInitial(name: string, email: string): Promise<void> {
    await this.fillField(this.signupNameInput, name);
    await this.fillField(this.signupEmailInput, email);
    await this.clickElement(this.signupButton);
  }

  
  async fillAccountInfo(accountData: RegisterTestCase): Promise<void> {
    if (accountData.title === 'Mr') {
      await this.clickElement(this.titleMrRadio);
    } else if (accountData.title === 'Mrs') {
      await this.clickElement(this.titleMrsRadio);
    }

    await this.fillField(this.passwordInput, accountData.password);

    if (accountData.day) await this.selectOption(this.daysSelect, accountData.day);
    if (accountData.month) await this.selectOption(this.monthsSelect, accountData.month);
    if (accountData.year) await this.selectOption(this.yearsSelect, accountData.year);

    const wantsNewsletter = String(accountData.newsletter).toLowerCase() === 'true';
    const wantsSpecialOffers = String(accountData.specialOffers).toLowerCase() === 'true';

    if (wantsNewsletter) {
      await this.checkCheckbox(this.newsletterCheckbox);
    } else {
      await this.uncheckCheckbox(this.newsletterCheckbox);
    }

    if (wantsSpecialOffers) {
      await this.checkCheckbox(this.specialOffersCheckbox);
    } else {
      await this.uncheckCheckbox(this.specialOffersCheckbox);
    }
  }

 
  async fillAddressInfo(addressData: RegisterTestCase): Promise<void> {
    await this.fillField(this.firstNameInput, addressData.firstName);
    await this.fillField(this.lastNameInput, addressData.lastName);
    await this.fillField(this.companyInput, addressData.company);
    await this.fillField(this.address1Input, addressData.address1);
    await this.fillField(this.address2Input, addressData.address2);

    if (addressData.country) {
      await this.selectOption(this.countrySelect, addressData.country);
    }

    await this.fillField(this.stateInput, addressData.state);
    await this.fillField(this.cityInput, addressData.city);
    await this.fillField(this.zipcodeInput, addressData.zipcode);
    await this.fillField(this.mobileNumberInput, addressData.mobileNumber);

    await this.clickElement(this.createAccountButton);
  }

 
  async register(data: RegisterTestCase): Promise<void> {
    await this.fillSignupInitial(data.name, data.email);

  
    const step1Failed = await this.isErrorMessageVisible().catch(() => false);
    if (step1Failed) return;

    await this.fillAccountInfo(data);
    await this.fillAddressInfo(data);
  }


  async getErrorMessage(): Promise<string> {
    return this.getElementText(this.signupErrorMessage);
  }

  
  async isErrorMessageVisible(): Promise<boolean> {
    return this.isElementVisible(this.signupErrorMessage);
  }


  async getSuccessHeading(): Promise<string> {
    return this.getElementText(this.accountCreatedHeading);
  }

  
  async isSuccessHeadingVisible(): Promise<boolean> {
    return this.isElementVisible(this.accountCreatedHeading);
  }
}
