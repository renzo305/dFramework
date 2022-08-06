import Page from "./page";
import * as obj from "./elements"
import chai from "chai";

class HomePage extends Page{
    constructor(){
        super()
    }

    /** Page objects */
    get emailInputBox(){ return $(obj.emailEle)}
    get pwordInputBox(){ return $(obj.pwordEle)}
    get signinBtn(){ return $(obj.loginEle)}
    get signoutBtn(){ return $(obj.logoutEle)}
    get loginBtn(){return $(obj.signinEle)}

    /** Page Actions */
    async enterEmail(username: string){
        if(!username) throw Error('Given username:  ${username}, ${err.message}')
        try{
            username = username.trim()
            await this.typeInto(await this.emailInputBox, username)
            
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

    async clickSignin(){
        try{
            await this.signinBtn.scrollIntoView()
            await this.click(await this.signinBtn)
            
        }
        catch(err){
            err.message = 'Error clicking sign-in: ${err.message}'
        }
    }

    async clickSignOut(){
        try{
            await this.signoutBtn.scrollIntoView()
            await this.click(await this.signoutBtn)
        }
        catch(err){
            err.message = 'Error clicking sign-in: ${username}, ${err.message}'
        }
    }

    async clickLogin(){
        try{
            await this.loginBtn.scrollIntoView()
            await this.click(await this.loginBtn)
            
            
        }
        catch(err){
            err.message = "Error clicking sign-in: ${username}, ${err.message}"
        }
    }

    async signInToApp(email:string, password: string){
        try{
            await this.clickSignin()
            await this.enterEmail(email)
            await this.enterPword(password)
            await this.clickLogin()
            await this.clickSignOut()
            
        }
        catch(err){
            throw err
        }
    }


}
export default new HomePage()