
export class LoginElements {
    public login: string;
    public email: string;
    public pword: string;
    public logout: string;
    public signin: string;
    public logo: string;


    public constructor(login: string, email: string, pword: string, logout: string, signin: string, logo: string){
        this.login = login;
        this.email = email;
        this.pword = pword;
        this.logout= logout
        this.signin = signin;
        this.logo = logo;

    }

    public getLogin():string{
        return this.login;
    }

    public getEmail():string{
        return this.email;
    }

    public getPword():string{
        return this.pword;
    }

    public getLogout():string{
        return this.logout;
    }

    public getSignin():string{
        return this.signin;
    }

    public getLogo():string{
        return this.logo;
    }


}

export const signIn = new LoginElements
    (
        '//div/a[@class="login"]',
        '//input[@id="email"]', 
        '//input[@id="passwd"]',
        '//div/a[@class="logout"]',
        '//button[@id = "SubmitLogin"]',
        '//div/a[@title = "My Store"]'
        );

export class Shopping{
    public tab_Tshirt: string;
    


    public constructor(tab_Tshirt: string){
        this.tab_Tshirt = tab_Tshirt;
   
    }

    public getTshirt():string{
        return this.tab_Tshirt;
    }


}

export const shopping = new Shopping
    (
        "//li[3]/a[contains(@text(), 'T-shirts')]"

        );

//Login Elements
export const loginEle = signIn.getLogin()
export const emailEle = signIn.getEmail()
export const pwordEle = signIn.getPword()
export const logoutEle = signIn.getLogout()
export const signinEle = signIn.getSignin()
export const logoElem = signIn.getLogo()

//Shopping Elements
export const tshirtTab = shopping.getTshirt()


//Create Account
export class CreateAccElements {
    public emailCreate: string;
    public title: string;
    public fname: string;
    public lname: string;
    public pwordCreate: string;
    public buttonCreate: string;
    //Address Section


    public constructor(emailCreate: string, fname: string, lname: string, title: string, pwordCreate:string, buttonCreate:string )
    {
        this.emailCreate = emailCreate; 
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.pwordCreate = pwordCreate;
        this.buttonCreate = buttonCreate;

    }

    public getEmail():string{
        return this.emailCreate;
    }

    public getFname():string{
        return this.fname;
    }

    public getLname():string{
        return this.lname;
    }

    public getTitle():string{
        return this.title;
    }
     
    public getPword():string{
        return this.pwordCreate;
    }

    public getBtnCreate():string{
        return this.buttonCreate;
    }
    
}




export const CreateAcc = new CreateAccElements
    (
        '//div/input[@id="email_create"]',
        '//input[@id="customer_firstname"]',
        '//input[@id="customer_lastname"]',
        '//span/input[@type="radio" and @name = "id_gender"]/ancestor::div/div[@class = "radio-inline"]',
        '//input[@type="password"]',
        '//button[@id="SubmitCreate"]' 
        );

export const emailCreate = CreateAcc.getEmail()
export const fnameCreate = CreateAcc.getFname()
export const lnameCreate = CreateAcc.getLname()
export const titleCreate = CreateAcc.getTitle()
export const pwordCreate = CreateAcc.getPword()
export const btnCreate = CreateAcc.getBtnCreate()


