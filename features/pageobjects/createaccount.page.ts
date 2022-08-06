import Page from "./page";
import * as obj from "./elements"
import chai from "chai";
var x;

class CreateAccount extends Page{
    constructor(){
        super()
    }

    /** Page objects */
    
    get emailInputBox(){ return $(obj.emailCreate)}
    get pwordInputBox(){ return $(obj.pwordCreate)}
    get fnameInputBox(){ return $(obj.fnameCreate)}
    get lnameInputBox(){ return $(obj.lnameCreate)}
    get titleRadioBtn(){ return $$(obj.titleCreate[x])}
    get signinBtn(){ return $(obj.loginEle)}
    get createAccBtn(){ return $(obj.btnCreate)}
    get createAccEmail(){ return $(obj.emailCreate)}

    /** Page Actions */
    async enterEmail(email: string){
        if(!email) throw Error('Given email:  ${email}, ${err.message}')
        try{
            email = email.trim()
            await this.typeInto(await this.emailInputBox, email)
            
        }
        catch(err){
            err.message = 'Error entering username: ${username}, ${err.message}'
        }
    }

    async enterPword(pword: string){
        if(!pword) throw Error('Given password: ${pword}, ${err.message}')
        try{
            pword = pword.trim()
            await this.pwordInputBox.scrollIntoView()
            await this.typeInto(await this.pwordInputBox, pword)
            
        }
        catch(err){
            err.message = 'Error entering username: ${pword}, ${err.message}'
        }
    }

    async enterFname(fname: string){
        if(!fname) throw Error('Given password: ${fname}, ${err.message}')
        try{
            fname = fname.trim()
            await this.fnameInputBox.scrollIntoView()
            await this.typeInto(await this.fnameInputBox, fname)
            
        }
        catch(err){
            err.message = 'Error entering username: ${pword}, ${err.message}'
        }
    }

    async enterLname(lname: string){
        if(!lname) throw Error('Given password: ${lname}, ${err.message}')
        try{
            lname = lname.trim()
            await this.lnameInputBox.scrollIntoView()
            await this.typeInto(await this.lnameInputBox, lname)
            
        }
        catch(err){
            err.message = 'Error entering username: ${pword}, ${err.message}'
        }
    }

    async clickTitleRadioBtn(choice: number){
        try{
            return x = obj.titleCreate[choice]
            await this.titleRadioBtn.scrollIntoView()
            await this.click(await this.titleRadioBtn)
            
        }
        catch(err){
            err.message = 'Error clicking sign-in: ${err.message}'
        }
    }

    async clickSignIn(){
        try{
            await this.signinBtn.scrollIntoView()
            await this.click(await this.signinBtn)
        }
        catch(err){
            err.message = 'Error clicking sign-in: ${username}, ${err.message}'
        }
    }

    async clickCreateAcc(){
        try{
            await this.createAccBtn.scrollIntoView()
            await this.click(await this.createAccBtn)
        }
        catch(err){
            err.message = 'Error clicking sign-in: ${username}, ${err.message}'
        }
    }

    async enterEmailCreate(email: string){
        if(!email) throw Error('Given password: ${lname}, ${err.message}')
        try{
            email = email.trim()
            await this.createAccEmail.scrollIntoView()
            await this.typeInto(await this.createAccEmail, email)
            
        }
        catch(err){
            err.message = 'Error entering username: ${pword}, ${err.message}'
        }
    }


   

    async signInToApp(email:string, password: string, choice: number, fname: string, lname: string){
        try{
            await this.clickSignIn()
            await this.enterEmailCreate(email)
            await this.clickCreateAcc()
            await this.clickTitleRadioBtn(choice)
            await this.enterFname(fname)
            await this.enterLname(lname)
            await this.enterEmail(email)
            await this.enterPword(password)
            
            
        }
        catch(err){
            throw err
        }
    }


}
export default new CreateAccount()