const { faker } = require("@faker-js/faker")

describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        cy.screenshot('1')
        //cy.get('button').click()
    })

    let page = {
        title: faker.lorem.words(),
        content: faker.lorem.paragraph()
    }
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
        cy.get('textarea[placeholder="Page title"]').type(page.title)
        //Enter content page
        cy.get('article').within(() => {
            cy.wait(500)
            cy.get('div[data-placeholder="Begin writing your page..."]').type(page.content)
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
        cy.contains(page.title).parent().click()
        cy.wait(500)
        cy.screenshot('9')
        //Click settings page
        cy.get('button[title="Settings"]').click()
        cy.wait(500)
        cy.screenshot('10')
        cy.get('input[type=text]').clear()
        cy.get('textarea[name="post-setting-custom-excerpt"]').clear()
        cy.wait(500)
        cy.get('div.gh-date-time-picker-error').should('contain', 'Must be in format: "15:00"')
        cy.screenshot('11')
        cy.wait(500)
        

    })
  })