class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigate(url) {   
        await this.page.goto(url);
    }   
    async type(locator , text) {
        await this.page.fill(locator, text);
    }
    async click(locator) {
        await this.page.click(locator);
    }

}
module.exports = BasePage;