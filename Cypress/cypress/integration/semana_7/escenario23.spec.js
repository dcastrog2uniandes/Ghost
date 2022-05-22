const { faker } = require("@faker-js/faker")

describe('Testing Ghost', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        // when the exception originated from an unhandled promise
        // rejection, the promise is provided as a third argument
        // you can turn off failing the test in this case
        if (promise) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    let integration = {
        name: faker.lorem.word(10),
    }
    it('Escenario 23', ()=>{
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
        //click general settings
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/integrations/"]').click()
        })
        cy.wait(500)
        cy.screenshot('9')
        cy.contains(integration.name).parent().click()
        cy.wait(500)
        cy.get('button').contains('Delete integration').click()
        cy.wait(300)
        cy.screenshot('10')
        cy.get('div.modal-footer').within(() => {
            cy.wait(500)
            cy.get('button').contains('Delete Integration').click()
        })
        cy.wait(1000)
        cy.screenshot('11')
        cy.wait(500)
    })
  })