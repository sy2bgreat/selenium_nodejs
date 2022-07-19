const { Builder, By, Key, until } = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        
        await driver.get('https://www.google.com');
        // let userAgent = await driver.executeScript("return navigator.userAgent;")
        // console.log('[UserAgent]', userAgent);
        let input = await driver.findElement(By.className('gLFyf'));

        let keyword = 'South Korea';
        input.sendKeys(keyword, Key.ENTER);

        await driver.wait(until.elementLocated(By.css('.SDkEP')), 10000);
        let resultElements = await driver.findElement(By.className('yuRUbf'));
        console.log('[resultElements.length]', resultElements.length);

        try {
            await driver.wait(() => { return false; }, 4000);
        } catch (err) {

        }  
        
    }
    finally{
        driver.quit();
    }
})();