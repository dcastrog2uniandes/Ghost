const { Given, When, Then, Before} = require('@cucumber/cucumber');




/*Given('I navigate to page {kraken-string}', async function(url) {
    return await this.driver.url(url);
}); */

var nameScenario = "";
var i = 0;

Before(async function(scenario) {
     nameScenario = scenario.pickle.name;
     i = 0;

})

When('I save screenshot v435 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.35/${imageName}.png`);
});

When('I save screenshot v444 {string} {string}', async function (scenario,imageName) {
    await this.driver.saveScreenshot(`reports/scenario_${scenario}/v4.44/${imageName}.png`);
});

//ESCENARIO EDITAR TAG

When('I enter email {kraken-string}', async function(email) {
    let element = await this.driver.$('#ember7');
    await element.setValue(email);
    
    

});

When('I enter password {kraken-string}', async function(password) {
    let element = await this.driver.$('#ember9')
    await element.setValue(password);
    


});



When('I click in login', async function(){
    await this.driver.$('#ember11').click();
    

});



When('I go to Tags and click on it', async function(){
    let element = await this.driver.$("*=Tags")
    await element.click();
    
});

When('I click in new tag', async function(){
    return await this.driver.$("span=New tag").click();

})

When("I create a tag", async function(){
    return await this.driver.$("#tag-name").setValue('tag 3');
})

When ("I save a tag", async function(){
    return await this.driver.$("span=Save").click();
})



When('Search the first tag on the list', async function(){
    let  element = await this.driver.$(".gh-list-chevron");
    await element.click();
    
});



When('Change the name of the tag for {kraken-string}', async function(nombreTag){
    await this.driver.$("#tag-name").setValue(nombreTag);
    
});



When('I click in button save', async function(){
    await this.driver.$("span=Save").click();
    
})

Then('I navigate to page',async function(){
    //todo
})







/*SCENERARIO CAMBIAR CONTRASEÑA*/



//contraseña 4.35

When('I go to settings page', async function() {
    let element = await this.driver.$('[href="#/settings/"]');
    await element.click()
    
})

When("I click in Staff", async function(){
    let element = await this.driver.$("#staff_svg__Regular");
    await element.click()
    
})

When("I choose admin user", async function() {
    let element = await this.driver.$('h3=Admin');
    await element.click();
    
})

When ('I enter old password {kraken-string}', async function(old_password){
    let element = await this.driver.$('#user-password-old');
    await element.setValue(old_password);
    
})

When('I enter new password {kraken-string}', async function(new_password){
    let element = await this.driver.$('#user-password-new');
    await element.setValue(new_password);
    
})

When ('I enter verification of new password {kraken-string}', async function(password_confirm) {
    let element = await this.driver.$('#user-new-password-verification');
    await element.setValue(password_confirm);
    
})

When('I click change password', async function() {
    let element = await this.driver.$("span=Change Password");
    await element.click();
    
})


Then('The new password should be old password', async function() {
    await this.driver.$('[href="#/settings/staff/"]').click()
    await this.driver.$('h3=Admin').click();
    await this.driver.$('#user-password-old').setValue("NPruebasA123");
    await this.driver.$('#user-password-new').setValue("PruebasA123");
    await this.driver.$('#user-new-password-verification').setValue("PruebasA123");
    await this.driver.$("span=Change Password").click();
    


})

Then('I navegate to page', async function(){

})


//4.44
When("I choose admin user in 4.44", async function() {
    let element = await this.driver.$('h3=Admin test');
    await element.click();
    
})

Then('The new password should be old password in 4.4', async function() {
    await this.driver.$('[href="#/settings/staff/"]').click()
    await this.driver.$('h3=Admin test').click();
    await this.driver.$('#user-password-old').setValue("NPruebasA123");
    await this.driver.$('#user-password-new').setValue("PruebasA123");
    await this.driver.$('#user-new-password-verification').setValue("PruebasA123");
    await this.driver.$("span=Change Password").click();
    


})






/*
//scenario3
When('I go to view Site', async function() {
    let element = await this.driver.$('[href="#/site/"]');
    return await element.click();
})

When('I click button subscribe', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[1]/div[1]");
    return await element.click()
})




When('I enter name {kraken-string}', async function(name) {
    let element = await this.driver.$("input[placeholder='Jamie Larson']");
    return await element.setValue(name);
} )

When('I enter email-user {kraken-string}', async function(email) {
    let element = await this.driver.$("#input-email");
    return await element.setValue(email);
})

When('I click button Sign up', async function() {
    let element = await this.driver.$("button=Sign up");
    return await element.click();
})

Then("I navigate to page", async function(){
    //todo

})

*/

//SCENARIO REVOCAR SUBSCRIPCION

//4.44

When('I go to Members page', async function(){
    let element = await this.driver.$("[href='#/members/']");
    await element.click();
    
    

})

When('I pick the first member of the list', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/p[1]");
    await element.click();
    
})

When('I click configuration member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]");
    return await element.click();
   // 
})

When('I click delete member', async function() {
    let element = await this.driver.$(".red");
    await element.click();
    
})

When('I click confirm delete member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]");
    await element.click();
    
})

Then('I navigate to page', async function() {
    //todo
})


//4.35
When('I click delete member in 4.35', async function() {
    let element = await this.driver.$("span=Delete member");
    await element.click();
    
})

When('I click confirm delete member in 4.35', async function() {
    let element = await this.driver.$("span=Delete member");
    await element.click();
    
})


//SCENARIO ELIMINAR POST EN BORRADOR



When('I go to Drafs page', async function(){
    let element = await this.driver.$("[href='#/posts/?type=draft']");
    await element.click();
    

})

When('I pick the first post of the list', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/p[1]");
    await element.click();
    
})

When('I click settings post', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]/*[name()='svg'][1]");
    await element.click();
    
})


When('I click delete post', async function() {
    let element = await this.driver.$("span*=Delete post");
    await element.click();
    
})

When('I click confirm delete post', async function() {
    let element = await this.driver.$("span=Delete");
    await element.click();
    
})

Then('I navigate to page', async function() {
    //todo
})


//elimiar post scheduled



When('I go to scheduled page', async function(){
    let element = await this.driver.$("[href='#/posts/?type=scheduled']");
    await element.click();
    

})