const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    it('Escenario 13', ()=>{
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
        cy.get('button').filter(':contains("Edit picture")').click()
        cy.wait(500)
        cy.screenshot('5')
        cy.get('div.modal-footer').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(200)
        cy.screenshot('6')
        cy.wait(200)
    })
  })