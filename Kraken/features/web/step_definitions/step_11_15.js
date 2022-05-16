const { Given, When, Then } = require('@cucumber/cucumber');

When('I save screenshot v435 {string} {string}', async function (escenario, nombre) {
    return await this.driver.saveScreenshot(`./reports/scenario_${escenario}/v4.35/${nombre}.png`);
  });


When('I save screenshot v444 {string} {string}', async function (escenario, nombre) {
    return await this.driver.saveScreenshot(`./reports/scenario_${escenario}/v4.44/${nombre}.png`);

});

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click Sign in', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})

When('I click Tags', async function() {
    let element = await this.driver.$('#ember29');
    return await element.click();
})


When('I click primer tag', async function() {
    let element = await this.driver.$('.gh-list-chevron');
    return await element.click();
})

When('I click New Tag', async function() {
    let element = await this.driver.$('.gh-btn-primary');
    return await element.click();
})

When('I click save Tag', async function() {
    let element = await this.driver.$('button=Save');
    return await element.click();
})

When('I click write name Tag', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/input[1]');
    return await element.setValue('test');
})



When('I click Delete tag', async function() {
    let element = await this.driver.$('button=Delete tag')
    return await element.click();
})

When('I click Delete botton', async function() {
    let element = await this.driver.$('button=Delete')
    return await element.click();
})

When('I click Configuration', async function() {
    let element = await this.driver.$('circle');
    return await element.click();
})

When('I click Staff', async function() {
    let element = await this.driver.$('#staff_svg__Regular');
    return await element.click();
})

When('I click Invite People', async function() {
    let element = await this.driver.$("button[class='gh-btn gh-btn-primary']");
    return await element.click();
})

When('I write email staff', async function() {
    let element = await this.driver.$('#new-user-email');
    return await element.setValue("otobar@hotmail.com");
})

When('I click send invitation', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/button[1]");
    return await element.click();
})

When('I click Resend', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/section[1]/div[1]/div[1]/article[1]/div[2]/div[1]/a[2]");
    return await element.click();
})

When('I click Members', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]");
    return await element.click();
})

When('I click first member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/p[1]");
    return await element.click();
})


When('I click configuration member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]");
    return await element.click();
})

When('I click delete member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/div[1]/div[1]/button[1]/span[1]");
    return await element.click();
})

When('I click confirm delete member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]");
    return await element.click();
})

When('I click cancel delete member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[1]/span[1]");
    
    return await element.click();
})






