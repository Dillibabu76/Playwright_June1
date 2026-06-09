require('dotenv').config();
 module.exports = {

    baseUrl: process.env.BASE_URL,

    username: process.env.APP_USERNAME,

    password: process.env.APP_PASSWORD,

    browser: process.env.BROWSER,

    headless: process.env.HEADLESS === 'false',

    timeout: Number(process.env.TIMEOUT)
};