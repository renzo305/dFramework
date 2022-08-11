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

    async radioBtn(/*eleChild: WebdriverIO.Element, */eleChild: WebdriverIO.Element,  choice: string){
        // let ele = await eleChild.$[choice];
        // ele.click()
        // // for(let i = 0; i < ele.length; i++){
        // //         // await eleChoice.findIndex(eleChoice, choice);
        // //         if(i = choice){
        // //             let chosenOpt = eleChoice[choice]
        // //             await chosenOpt.click()
        // //         }


        // //     }

        let eleChildArr = await $$(eleChild)
        let choiceStrArr = [];
        for(let i = 0; i < eleChildArr.length; i++){
            let choiceStr = await eleChildArr[i].getText();
            choiceStrArr.push(choiceStr);
        }

        await choiceStrArr[choice].click();
        await browser.pause(2000)



    }
 }