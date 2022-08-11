import { Given, When, Then} from "@cucumber/cucumber";
import * as data from "../data/creds";
import autoHomePage, * as func from "../pageobjects/auto.home.page";
import chai from "chai"




Given(/^Launch app in browser$/, async function()
{
    console.log("Before opening browser...");
    try{
        await autoHomePage.navigateTo(data.url)
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
        await autoHomePage.signInToApp(data.email, data.pword)
    }
    catch(err){
        err.message = 'Failed at login step, ${err}'
        throw err
    }
    await browser.saveScreenshot('./screenshots/click.png')
    
}) 

