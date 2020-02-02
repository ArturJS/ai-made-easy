const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com/';

const clickBtn = async (selector, { xpath = false } = {}) => {
    let btn = await instagram.page[xpath ? '$x' : '$'](selector);

    if (xpath) {
        btn = btn[0];
    }

    await btn.click();
};

const instagram = {
    browser: null,
    page: null,
    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            // headless: true
            headless: false
        });
        instagram.page = await instagram.browser.newPage();
    },
    login: async (username, password) => {
        await instagram.page.goto(
            `${BASE_URL}accounts/login/?source=auth_switcher`,
            { waitUntile: 'networkidle2' }
        );

        // const loginButton = await instagram.page.$x(
        //     // '//a[contains(text(), "Log in")]' // todo use on server side
        //     '//a[contains(text(), "Вход")]'
        // );

        // await loginButton[0].click();
        // await instagram.page.waitForNavigation({ waitUntil: 'networkidle2' });
        await instagram.page.waitFor(1000);
        await instagram.page.type('input[name="username"]', username, {
            delay: 50
        });
        await instagram.page.type('input[name="password"]', password, {
            delay: 50
        });

        await clickBtn('button[type="submit"]');

        await instagram.page.waitForNavigation({ waitUntil: 'networkidle2' });

        await clickBtn("//button[contains(text(), 'Не сейчас')]", {
            xpath: true
        });
    }
};

module.exports = instagram;
