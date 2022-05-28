const { Given, When, Then } = require('@cucumber/cucumber');
//ASUS@DAVID-CASTRO MINGW64 ~/Documents/Maestria/Pruebas Automatizadas/Prueba_Kraken
//$ ./node_modules/kraken-node/bin/kraken-node run
When('I save screenshot v435 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.35/${imageName}.png`);
});

When('I save screenshot v444 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.44/${imageName}.png`);
});
//Escenario 1
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click login', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
});

When('I click members', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]');
    return await element.click();
});

When('I click new member', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/a[1]/span[1]');
    return await element.click();
});

When('I enter name member v435 {kraken-string}', async function (name) {
    let element = await this.driver.$('//input[@id="member-name"]');              
                                       
    return await element.setValue(name);
});

When('I enter email member v435 {kraken-string}', async function (email) {
    let element = await this.driver.$('//input[@id="member-email"]');
    return await element.setValue(email);
});

When('I enter name member v444 {kraken-string}', async function (name) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]');
    return await element.setValue(name);
});

When('I enter email member v444 {kraken-string}', async function (email) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]');
    return await element.setValue(email);
});

Then('I click save member', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]');
    return await element.click();
});

When('I select member by name', async function() {
    let element = await this.driver.$('//section/div/table/tbody/tr/a/div/div/h3[text()="Test Name"]//ancestor::tr');
    return await element.click();
});

When('I click options member', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()="svg"][1]');
    return await element.click();
});

When('I click delete member v435', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/div[1]/div[1]/button[1]/span[1]');
    return await element.click();
});
When('I click confirm delete member v435', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]');
    return await element.click();
});

When('I click delete member v444', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/ul[1]/li[2]/button[1]/span[1]');
    return await element.click();
});
When('I click confirm delete member v444', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]');
    return await element.click();
});



// Modificar perfil

When('I click perfil options', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]');
    return await element.click();
});

When('I click your profile', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]/a[1]');
    return await element.click();
});

When('I enter user name {string}', async function (name) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(name);
});

When('I enter user slug {string}', async function (slug) {
    let element = await this.driver.$('#user-slug');
    return await element.setValue(slug);
});

When('I enter user website {string}', async function (url_site) {
    let element = await this.driver.$('#user-website');
    return await element.setValue(url_site);
});

When('I enter user tw_profile {string}', async function (tw_profile) {
    let element = await this.driver.$('#user-twitter');
    return await element.setValue(tw_profile);
});

When('I enter user fb_profile {string}', async function (fb_profile) {
    let element = await this.driver.$('#user-facebook');
    return await element.setValue(fb_profile);
});

When('I enter user bio {string}', async function (bio) {
    let element = await this.driver.$('#user-bio');
    return await element.setValue(bio);
});

Then('I click save profile', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]');
    return await element.click();
});

Then('I click settings', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[2]/a[1]/*[name()="svg"][1]/*[name()="circle"][1]');
    return await element.click();      
});

Then('I click staff', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[2]/a[4]/div[1]/p[1]');
    return await element.click();
});

Then('I click signout', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]');
    return await element.click();
});

// Crear pagina

When('I click pages', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]');
    return await element.click();      
});

When('I click new page', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]');
    return await element.click();
});

When('I enter page title {string}', async function (title) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]');
    return await element.setValue(title);
});

When('I enter page content {string}', async function (sentence) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]');
    return await element.setValue(sentence);
});

When('I click publish options', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]');
    return await element.click();
});

When('I click publish', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    return await element.click();
});

When('I click pages from page', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]');
    return await element.click();
});

When('I select page by title', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Realizando pruebas automatizadas con Kraken"]//ancestor::li');
    return await element.click();
});

When('I select page settings', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]/*[name()="svg"][1]');
    return await element.click();
});

When('I select delete page', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/button[1]/span[1]');
    return await element.click();
});

When('I select delete confirm', async function() {
    let element = await this.driver.$('button=Delete');
    return await element.click();
});


//Crear Tag
When('I click tags', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[3]/a[1]');
    return await element.click();
});

When('I click new tag', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]');
    return await element.click();
});

When('I enter tag name {string}', async function(name) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/input[1]');
    return await element.setValue(name);
});

When('I enter tag slug', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/input[1]');
    return await element.setValue();
});

When('I enter tag description {string}', async function(description) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[3]/textarea[1]');
    return await element.setValue(description);
});

Then('I click save tag', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[1]/header[1]/section[1]/button[1]/span[1]');
    return await element.click();
});

When('I select tag by name', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Pruebas Automatizadas Tag"]//ancestor::li');
    return await element.click();
});

/*
When('I click navigation', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[2]/a[4]/div[1]/p[1]');
    return await element.click();
});
*/
//Cambiar descripción 

When('I click general', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[2]/a[1]/div[1]');
    return await element.click();      
});

When('I click expand publication info', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/section[1]/div[1]/div[1]/button[1]/span[1]');
    return await element.click();      
});

When('I enter site them {string}', async function(them) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input[1]');
    return await element.setValue(them);//Thoughts, stories and ideas.
});

When('I click save general settings', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]');
    return await element.click();      
});








