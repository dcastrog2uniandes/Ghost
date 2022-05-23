const { faker } = require('@faker-js/faker');
//import { faker } from '@faker-js/faker';



const numEscenario = "1";
let seqImg = 60
function nombreArchivo() {
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}


describe('Testing Ghost create new post', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
       cy.wait(2000)
        //cy.get('button').click()
    })

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
	
    it('Escenario 1 create new post', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('nbarreto@uniandes.edu.co')
            cy.get('#ember9').type('nbarreto80235760')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        //Go to post list

        cy.screenshot(nombreArchivo())

        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').first().parent().click()
        })

        cy.wait(500)
        //Go to new post
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/post/"]').click()
        })
        cy.screenshot(nombreArchivo())
        

        //Fill form
        let post_title = ''
        let post_body = ''
        
        cy.get('.gh-editor-feature-image-unsplash').click()
        cy.wait(300)
        cy.get('.gh-unsplash-photo-overlay').first().trigger('mouseover')
        cy.wait(300)
        
        cy.contains('Insert image').first().click()
        cy.wait(300)


        cy.wait(500)
        cy.get('textarea').clear()
        cy.get('div.koenig-editor__editor-wrapper > div').clear()

        

        cy.wait(2000)

        cy.screenshot(nombreArchivo())

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').parent().click()
        })

        cy.screenshot(nombreArchivo())
       
        cy.wait(1000)
    })
  })