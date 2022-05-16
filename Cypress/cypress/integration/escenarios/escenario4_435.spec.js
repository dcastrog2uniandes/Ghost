describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3001/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 4', ()=>{
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
        //Fill form tag
        cy.get('form').within(() => {
            cy.get('#tag-name').type('Pruebas Automatizadas Cypress Tag')
            cy.get('#tag-slug').type('_')
            cy.get('#tag-description').type('Lorem ipsum dolor sit amet')
        })
        cy.wait(500)
        cy.screenshot('5')
        //Click save tag
        cy.get('button[type=button]').contains('Save').click()
        cy.wait(1000)
        cy.screenshot('6')
        //Go to list tags
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/tags/"]').parent().click()
        })
        //Select created tag from list
        cy.wait(1000)
        cy.contains('Pruebas Automatizadas Cypress Tag').parent().click()
        cy.screenshot('7')
        cy.wait(500)
    })
  })