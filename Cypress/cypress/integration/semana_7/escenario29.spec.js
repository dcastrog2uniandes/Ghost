
const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 1', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        cy.screenshot('2')
        //Go to members list
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        //Fill form
        
        let member_name = faker.name.firstName()
        let member_email = faker.internet.email()
        cy.wait(500)
        cy.get('a[href*="#/members/new/"]').first().click()
        cy.wait(500)
        cy.screenshot('3')
        cy.get('form').within(() => {
            cy.get('#member-name').type(member_name,{force: true})
            cy.get('#member-email').type(member_email,{force: true})
        })
        //Save member
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button[type=button]').click()
        })
        cy.wait(1500)
        cy.screenshot('4')
        //Redirect to member list to check created user
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        cy.wait(500)
        cy.screenshot('5')
        //Filters
        cy.get('span').contains(' Filter ').click()
        cy.wait(200)
        cy.screenshot('6')
        cy.get('select').first().select('email')
        cy.wait(200)
        cy.screenshot('7')
        cy.get('button').contains('Apply filters').click()
        cy.wait(200)
        cy.screenshot('8')
        cy.wait(200)
    })
  })