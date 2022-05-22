const { faker } = require("@faker-js/faker")

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    let integration = {
        name: faker.lorem.word(10),
        description: faker.lorem.words(5)
    }
    it('Escenario 18', ()=>{
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
            cy.get('a[href*="#/settings/integrations/"]').click()
        })
        cy.wait(500)
        cy.screenshot('4')
        cy.get('a[href*="#/settings/integrations/new/"]').click()
        cy.wait(500)
        cy.screenshot('5')
        cy.get('#new-integration-name').type(integration.name)
        cy.wait(500)
        cy.screenshot('6')
        cy.get('div.modal-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Create').click()
            
        })
        cy.wait(500)
        cy.screenshot('7')
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })

        cy.wait(500)
        cy.screenshot('8')
        //click integrations list
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/integrations/"]').click()
        })
        cy.wait(200)
        cy.contains(integration.name).parent().click()
        cy.get('#integration_description').type(integration.description)
        cy.wait(200)
        cy.screenshot('9')
        //Save Integration
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(1500)
        cy.screenshot('10')
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })
        //click integrations list
        cy.wait(200)
        cy.screenshot('11')
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/integrations/"]').click()
        })
        cy.wait(200)
        cy.screenshot('12')
        cy.wait(200)

    })
  })