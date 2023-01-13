const { Builder, Browser, By } = require('selenium-webdriver');


const handlerActive = async (url,user,password)=>{
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get(url);
    await driver.findElement(By.id('Username')).sendKeys(user);
    await driver.findElement(By.id('Password')).sendKeys(password);
    await driver.findElement(By.className('button')).submit();
}

handlerActive("","","");

