const {  Before, After} = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const config = require('./config');
Before(async function () {
   switch (config.browser) {
        case 'chromium':
            this.browser = await chromium.launch({ headless: false });
            break;
        case 'firefox':
            this.browser = await firefox.launch({ headless: false });
            break;
        case 'webkit':
            this.browser = await webkit.launch({ headless: false });
            break;
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
