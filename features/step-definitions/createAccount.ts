import { Given, When, Then} from "@cucumber/cucumber";
import * as data from "../data/creds";
import CreateAccount, * as func from "../pageobjects/createaccount.page";
import chai from "chai"
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot";

Given(/^Launch app in browser$/, async function()
{
    console.log("Before opening browser...");
    try{
        await CreateAccount.navigateTo(data.url)
    }
    catch(err){
        err.message = 'Failed at navigation step' + err
        throw err
    }
    await browser.saveScreenshot('./screenshots/input.png')
   
})

When(/^Click Sign In$/, async function()
{
    console.log("Clicking Sign in button and logging in...");
    try{
        await CreateAccount.signInToApp("sharknado@gmils.com", data.pword, "1", "jerome", "cortez")
    }
    catch(err){
        err.message = 'Failed at login step, ${err}'
        throw err
    }
    await browser.saveScreenshot('./screenshots/click.png')


})

// Then(/^Fill up mandatory field then click registered button$/, async function(x:number)
// {
//     console.log("Clicking Sign in button and logging in...");
    
//     // /*1. Get choice list **/
//     // let eleArr = await $$('//div[@class="radio-inline"]')
//     // let titleStrArr = [];
//     // for(let i = 0; i < eleArr.length; i++){
//     //     let titleStr = await eleArr[i].getText();
//     //     titleStrArr.push(titleStr);
//     // }
//     // console.log('>> Title: ${titleStrArr}');

//     // /*2. Convert string to number **/
//     // let titleNumArr = titleStrArr.map((ele) => +ele.replace("$", ""));
//     // console.log('>> Title in number: ${titleNumArr}');

//     // let eleChoice = titleStrArr[x]
//     // let chosenTitle = await $(eleChoice)
// })