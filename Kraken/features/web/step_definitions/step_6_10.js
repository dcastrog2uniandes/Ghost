const { Given, When, Then } = require('@cucumber/cucumber');

When('I save screenshot v435 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.35/${imageName}.png`);
});

When('I save screenshot v444 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.44/${imageName}.png`);
});

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});


When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});


When('I click sing in', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})


When('I enter new post title {string}', async function (npost) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]');
    return await element.setValue(npost);
});

When('I enter new post body {string}', async function (npost) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]');
    return await element.setValue(npost);
});


When('I click firts post', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/p[1]/span[1]');
    return await element.click();
})

When('I click settings post', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]/*[name()=\'svg\'][1]');
    return await element.click();
})

When('I click delete post', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/button[1]/span[1]');
    return await element.click();
})

When('I click confirm delete post', async function() {
    let element = await this.driver.$('button=Delete');
    return await element.click();
})

When('I click firts post to edit', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]');
    return await element.click();
})

When('I click publish post', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]');
    return await element.click();
})

When('I click confirm publish post', async function() {
    let element = await this.driver.$('button=Publish');    
    return await element.click();
})


When('I click list all post', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]');    
    return await element.click();
})

When('I click filter publish post', async function() {
    let element = await this.driver.$('li=Published posts');
    return await element.click();
})















