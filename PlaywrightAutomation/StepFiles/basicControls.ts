import { Given, When } from "@cucumber/cucumber";
import { baiscCon } from "../Pages/basicCon";
import { pageFixture } from "../Hooks/PageFixture"; 

let bc:baiscCon

         Given('open the application for textboxes', async function () {

            bc = new baiscCon(pageFixture.page)
            await bc.navigateToApplication()
          
         });

 

         When('perform actions on the textboxes', async function () {
        
         });