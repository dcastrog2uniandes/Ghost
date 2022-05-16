describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })
    it('Escenario 3', ()=>{
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
            cy.get('a[href*="#/pages/"]').parent().click()
        })
        cy.wait(500)
        cy.screenshot('3')
        //Select New page
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/page/"]').click()
        })
        cy.wait(500)
        cy.screenshot('4')
        //Enter title page
        cy.get('textarea[placeholder="Page title"]').type('Pruebas automatizadas con Cypress')
        //Enter content page
        cy.get('article').within(() => {
            cy.wait(500)
            cy.get('div[data-placeholder="Begin writing your page..."]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
        })
        cy.wait(500)
        cy.screenshot('5')
        //Click pusblish options
        cy.get('div[role=button]').contains('Publish').click()
        cy.wait(500)
        cy.screenshot('6')
        //Confirm publish page
        cy.get('button').contains('Publish').click()
        cy.wait(1000)
        cy.screenshot('7')
        //Go to list pages
        cy.get('a[href*="#/pages/"]').contains('Pages').click()
        cy.wait(1000)
        cy.screenshot('8')
        //Select created page from list
        cy.contains('Pruebas automatizadas con Cypress').parent().click()
        cy.wait(500)
        cy.screenshot('9')
        //Click settings page
        cy.get('button[title="Settings"]').click()
        cy.wait(500)
        cy.screenshot('10')
        //Click delete page
        cy.get('button[type=button]').contains('Delete page').click()
        cy.wait(500)
        cy.screenshot('11')
        //Confirm delete page
        cy.get('div.modal-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Delete').click()
            
        })
        cy.screenshot('12')
        cy.wait(500)

    })
  })