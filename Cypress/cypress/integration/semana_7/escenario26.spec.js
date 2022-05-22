const { faker } = require("@faker-js/faker")

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })


    it('Escenario 26', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        cy.screenshot('2')
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })

        cy.wait(500)
        cy.screenshot('3')
        //click general settings
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/navigation/"]').click()
        })
        cy.wait(500)
        cy.screenshot('4')
        cy.get('div.gh-main-section-block').first().within(() => {
            cy.wait(500)
            cy.get('input[placeholder="Label"]').last().type(faker.lorem.word(8))
            
        })
        cy.wait(300)
        cy.screenshot('5')
        cy.get('button[type=button]').contains('Add').first().click({force: true})
        cy.wait(300)
        cy.screenshot('6')
        cy.get('button').contains('Save').click()

        cy.wait(300)
        cy.screenshot('7')
        cy.wait(300)
    })
  })