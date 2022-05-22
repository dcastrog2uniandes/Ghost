const { faker } = require("@faker-js/faker")

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 5', ()=>{
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
            cy.get('a[href*="#/settings/general/"]').click()
        })
        cy.wait(500)
        cy.screenshot('4')
        //Section Title & description, click expand
        cy.get('div.gh-expandable-block').first().within(() => {
            cy.wait(500)
            cy.get('button[type=button]').contains('Expand').click()
        })
        cy.wait(500)
        cy.screenshot('5')
       
        cy.get('#ember119').click().focused().clear({force: true}).type(faker.lorem.words(4),{force: true})
        
        //Click save changes
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        
        cy.wait(1000)
        cy.screenshot('6')
        cy.visit('http://localhost:3002')
        cy.screenshot('7')
        cy.wait(1500)



    })
  })