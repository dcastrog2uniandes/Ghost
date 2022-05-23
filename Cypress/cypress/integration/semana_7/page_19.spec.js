const { faker } = require('@faker-js/faker');

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
        //Go to page list

        cy.screenshot(nombreArchivo())

        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/pages/"]').first().parent().click()
        })

        cy.wait(500)
        //Go to new post
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/page/"]').click()
        })
        cy.screenshot(nombreArchivo())
        

        //Fill form
        let page_title = faker.lorem.word()
        let page_body = faker.lorem.paragraph()
        
        cy.get('.gh-editor-feature-image-unsplash').click()
        cy.wait(300)
        cy.get('.gh-unsplash-photo-overlay').first().trigger('mouseover')
        cy.wait(500)
        
        cy.contains('Insert image').first().click()
        cy.wait(500)


        cy.wait(500)
        cy.get('textarea').type(page_title,{force: true})
        cy.get('div.koenig-editor__editor-wrapper > div').type(page_body,{force: true})

      
        cy.wait(500)

        cy.screenshot(nombreArchivo())


        cy.get('main.gh-main  ').within(() => {
          cy.wait(500)
          cy.get('a[href*="#/pages/"]').parent().click()
        })

        cy.wait(500)
        cy.get('div.gh-contentfilter-type ').click()
        cy.wait(500)
        cy.get('ul.ember-power-select-options').first().within(() => {
            cy.get('li').filter(':contains("All pages")').first().click()
        })
     
        cy.wait(500)

        cy.get('ol').first().within(() => {
          cy.get('li').filter(`:contains("${page_title}")`).first().click()
        }) 

        cy.wait(500)

        cy.get('body > div.gh-app > div > main > button > span > svg').click()
        
        cy.wait(500)
        
        cy.get("input[placeholder='YYYY-MM-DD']").click()

        cy.wait(500)

        cy.get('button').filter(`:contains("11")`).first().click()

               
        cy.wait(2000)

        cy.screenshot(nombreArchivo())

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/pages/"]').parent().click()
        })

        cy.screenshot(nombreArchivo())


        
       
        cy.wait(1000)
    })
  })