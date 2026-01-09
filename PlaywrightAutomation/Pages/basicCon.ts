import{Page} from "playwright"
export class baiscCon{
     page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    private Elements = {
        selenium_practice_nav: "//ul[@id='nav1']/li[4]",

    }

    async navigateToApplication(){
        await this.page.goto("https://www.hyrtutorials.com/p/alertsdemo.html")
    }

    async clickOnNavItem(){
        await this.page.locator(this.Elements.selenium_practice_nav).hover()
    }
}