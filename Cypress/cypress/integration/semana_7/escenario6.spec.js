
const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 6', ()=>{
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
        cy.screenshot('3')
        let member1_name = faker.fake('{{name.firstName}} {{name.lastName}}')
        let member2_name = faker.fake('{{name.firstName}} {{name.lastName}}')
        let member_email = faker.internet.email()
        cy.wait(500)
        cy.get('a[href*="#/members/new/"]').first().click()
        cy.wait(500)
        cy.screenshot('4')
        cy.get('form').within(() => {
            cy.get('#member-name').type(member1_name,{force: true})
            cy.get('#member-email').type(member_email,{force: true})
        })
        //Save member
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button[type=button]').click()
        })
        cy.wait(1500)
        cy.screenshot('5')
        //Redirect to member list to check created user
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        cy.wait(1000)
        cy.screenshot('6')
        cy.get('a[href*="#/members/new/"]').first().click()
        cy.wait(500)

        cy.get('form').within(() => {
            cy.get('#member-name').type(member2_name,{force: true})
            cy.get('#member-email').type(member_email,{force: true})
        })
        //Save member
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button[type=button]').click()
        })
        cy.wait(500)
        cy.screenshot('7')
        cy.get('div.gh-alert-content').should('contain', 'Validation error, cannot save member. Member already exists. Attempting to add member with existing email address')
        
        cy.wait(1000)
        cy.screenshot('8')
        cy.wait(200)
    })
  })