
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
        cy.wait(500)
        cy.screenshot('3')
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('span.dropdown').click()
        })
        cy.screenshot('4')
        cy.get('a[href*="#/members/import"]').contains('Import members').parent().click()
        cy.wait(200)
        cy.screenshot('5')
        cy.get('input[type=file]').selectFile('members_escenario24.csv',{force: true})
        
        cy.wait(1000)
        cy.screenshot('6')
        cy.get('button').contains('Import 2 members').click()
        cy.wait(1000)
        cy.screenshot('7')
        cy.get('button').contains('View members').click()
        cy.wait(500)

        
    })
  })