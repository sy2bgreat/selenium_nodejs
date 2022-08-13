const { Builder, By, Key, until } = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        
        await driver.get('https://www.github.com');
        
        await driver.findElement(By.partialLinkText("Sign in")).click();

        console.log(await driver.getTitle());

        await driver.wait(until.elementLocated(By.className("application-main")), 10000);

        await driver.findElement(By.name("login")).sendKeys("sy2bgreat@gmail.com");
        await driver.findElement(By.name("password")).sendKeys("####",Key.RETURN);
      

        try {
            await driver.wait(() => { return false; }, 4000);
        } catch (err) {

        }  
        
    }
    finally{
        driver.quit();
    }
})();


//https://www.browserstack.com/guide/findelement-in-selenium