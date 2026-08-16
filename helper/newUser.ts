import { SignUp , CreateAccount , addressInfo} from '../page/signUP.ts'
import { name_email , newAccountInformation , newAddressInformation} from '../type/interface.ts'

export class fill_name_email {
    private signUp : SignUp;
    // createAccount? : CreateAccount;
    // addressInfo? : addressInfo;

    constructor(signUp: SignUp) {
        this.signUp = signUp;
        // this.createAccount = createAccount;
        // this.addressInfo = addressInfo;
    }
    
    async open_signUp_signIn():Promise<void>{
        await this.signUp.menu_login.click();
    }
    
    async sigup(name_email: name_email):Promise<void>{
        await this.signUp.sign_up_name_input.pressSequentially(name_email.name);
        await this.signUp.sign_up_email_input.pressSequentially(name_email.email);
        await this.signUp.sign_up_btn.click();
    }
}

export class fill_infoAccount{
    // signUp : SignUp;
    createAccount : CreateAccount;
    // addressInfo? : addressInfo;

    constructor( createAccount: CreateAccount) {
        // this.signUp = signUp;
        this.createAccount = createAccount;
        // this.addressInfo = addressInfo;
    }
    async enter_infomation(infoAccount : newAccountInformation):Promise<void>{

            const titles = [this.createAccount.Mr_radio, this.createAccount.Mrs_radio];
            const randomIndex = Math.floor(Math.random() * titles.length);
            await titles[randomIndex].check()
            await this.createAccount.Mr_radio.check();
            await this.createAccount.name_input.pressSequentially(infoAccount.name);
            await this.createAccount.email_input.pressSequentially(infoAccount.email);
            await this.createAccount.create_password_input.pressSequentially(infoAccount.password);
            await this.createAccount.day_droplist.selectOption(infoAccount.day);
            await this.createAccount.month_droplist.selectOption(infoAccount.month);
            await this.createAccount.year_droplist.selectOption(infoAccount.year);
            await this.createAccount.sign_up_radio.check();
            await this.createAccount.sign_up_radio.check();
        }
}
export class fill_addressAccount{
    // signUp : SignUp;
    //createAccount : CreateAccount;
     addressInfo : addressInfo;

    constructor(signUp: SignUp, createAccount: CreateAccount, addressInfo : addressInfo) {
        // this.signUp = signUp;
        //this.createAccount = createAccount;
        this.addressInfo = addressInfo;
    }
    async enter_addres(addres: newAddressInformation):Promise<void>{
        await this.addressInfo.firt_name_input.pressSequentially(addres.firt_name);
        await this.addressInfo.last_name_input.pressSequentially(addres.last_name);
    }

}