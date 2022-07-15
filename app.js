const { Builder } = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        // 네이버 실행
        await driver.get('https://www.naver.com/');
    }
    finally{
        driver.quit();
    }
})();