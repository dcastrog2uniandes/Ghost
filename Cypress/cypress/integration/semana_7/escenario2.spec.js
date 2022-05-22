const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    let staff_admin = {
        name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
        slug: faker.lorem.slug(2),
        website: faker.internet.url(),
        facebook: faker.internet.url(),
        twitter: faker.internet.url(),
        bio: faker.lorem.paragraph(1)
    }

    it('Escenario 2', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        cy.screenshot('2')
        //Clikc profile options
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            //cy.get('div.pe-all').first().click()
            cy.get('#ember33').click()
        })
        cy.wait(500)
        cy.screenshot('3')
        //Click your profile
        cy.get('ul[role=menu]').within(() => {
            cy.get('li').filter(':contains("Your profile")').click()
        })
        cy.wait(500)
        cy.screenshot('4')
        cy.get('form').within(() => {
            cy.get('#user-name').clear().type(staff_admin.name,{force: true})
            cy.get('#user-slug').clear().type(staff_admin.slug,{force: true})
            cy.get('#user-website').clear().type(staff_admin.website,{force: true})
            cy.get('#user-facebook').clear().type(staff_admin.facebook,{force: true})
            cy.get('#user-twitter').clear().type(staff_admin.twitter,{force: true})
            cy.get('#user-bio').clear().type(staff_admin.bio,{force: true})
        })
        cy.wait(500)
        //Save profile
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(1500)
        cy.screenshot('5')
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })
        cy.wait(500)
        cy.screenshot('6')
        //click staff users
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/staff/"]').click()
        })
        cy.wait(1000)
        cy.screenshot('7')
        //Clikc profile options
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            //cy.get('div.pe-all').first().click()
            cy.get('#ember33').click()
        })
        //Click sign out
        cy.wait(500)
        cy.screenshot('8')
        cy.get('ul[role=menu]').within(() => {
            cy.get('li').filter(':contains("Sign out")').click()
        })
        cy.screenshot('9')
        cy.wait(1000)
    })
  })