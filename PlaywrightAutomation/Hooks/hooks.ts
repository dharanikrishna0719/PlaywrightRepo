import {BeforeAll, Before, After, AfterAll} from "@cucumber/cucumber"
import { chromium } from "playwright";

import {pageFixture} from "../Hooks/PageFixture"
let browser:any
BeforeAll(async function(){

    browser = await chromium.launch({
headless:false
    })
})

Before(async function(){
 let context = await browser.newContext();
  pageFixture.page = await context.newPage();
  


})

 

AfterAll(async function(){
 await browser.close()
})
 


 
 


 