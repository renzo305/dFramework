import chai from "chai"
import { ElementArray } from "webdriverio"
import * as obj from "./elements"

export default class Page{
    constructor(){

    }

    /**All reusable web functions */
    async navigateTo(path: string){
        await browser.maximizeWindow()
        await browser.url(path)
        await browser.pause(3000)
        
    }

    async click(ele:WebdriverIO.Element){
        await ele.waitForExist({timeout: 2000})
        await ele.waitForClickable({timeout: 5000})
        await ele.scrollIntoView()
        if(!ele.elementId){
            throw Error(ele.error.message)
        }
        await ele.click()
        await browser.pause(2000)
    }

    async typeInto(ele:WebdriverIO.Element, text: string){
        await ele.waitForDisplayed({timeout: 5000})
        
        
        if(!ele.elementId){
            throw Error(ele.error.message)
        }
        await ele.setValue(text);
        await browser.pause(2000)
    }

    async radioBtn(eleChild:WebdriverIO.Element, eleParent:WebdriverIO.ElementArray, choice: number){
        await eleParent.find(eleChild, choice)

    }
}