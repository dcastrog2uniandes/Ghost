const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })


    it('Escenario 11', ()=>{
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
            
            cy.get('#user-name').clear()//nombre vacio
        })
        cy.wait(500)
        //Save profile
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(1000)
        cy.screenshot('5')
        cy.get('p.response').should('contain', 'Please enter a name.')
        cy.wait(200)
        cy.screenshot('6')
        cy.wait(200)
    })
  })