const { faker } = require("@faker-js/faker")
describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 30', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        cy.screenshot('2')
        //Go to pages list
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/tags/"]').parent().click()
        })
        cy.wait(500)
        cy.screenshot('3')
        //Select New tag
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/tags/new/"]').click()
        })
        cy.wait(500)
        cy.screenshot('4')

        cy.get('button[type=button]').contains('Save').click()

        cy.wait(500)
        cy.get('p.response').should('contain', 'You must specify a name for the tag.')
        cy.screenshot('6')
        
        cy.wait(500)
    })
  })