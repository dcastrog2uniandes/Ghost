const { faker } = require('@faker-js/faker');

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    let staff_admin = {
        old_password: 'Mari123456',
        new_password: faker.internet.password(200)
    }

    it('Escenario 7', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type(staff_admin.old_password)
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
            
            cy.get('#user-password-old').clear().type(staff_admin.old_password,{force: true})
            cy.get('#user-password-new').clear().type(staff_admin.new_password,{force: true})
            cy.get('#user-new-password-verification').clear().type(staff_admin.new_password,{force: true})

        })
        cy.wait(500)
        cy.screenshot('5')
        //Save profile
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(1500)
        cy.screenshot('6')
         //Clikc profile options
         cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            //cy.get('div.pe-all').first().click()
            cy.get('#ember33').click()
        })
        //Click sign out
        cy.wait(500)
        cy.screenshot('7')
        cy.get('ul[role=menu]').within(() => {
            cy.get('li').filter(':contains("Sign out")').click()
        })
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type(staff_admin.new_password)
            cy.get('#ember11').click()
        })
        cy.wait(500)
        cy.get('p.main-error').should('contain', 'Your password is incorrect.')
        cy.wait(200)
        cy.screenshot('8')
        cy.wait(200)
    })
  })