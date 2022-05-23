// USANDO VERSION Ghost 4.44.0 

const { faker } = require('@faker-js/faker');


let userData = {
  nombre:  faker.name.firstName()+' '+faker.name.lastName() ,
  primerNombre:faker.name.firstName(),
  apellido: faker.name.lastName() ,
  email:  faker.internet.email(),
  password:  faker.name.firstName(),
  cadena: faker.company.companyName(),
  cadenaLarga: faker.lorem.paragraphs()
}


const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}

describe.only('Crear tag con slug muy largo', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost')
        cy.wait(1000)
       
    })
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        // when the exception originated from an unhandled promise
        // rejection, the promise is provided as a third argument
        // you can turn off failing the test in this case
        if (promise) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })

    it('Crear tag con slug muy largo', ()=>{
      
    
       
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('Mari123456')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(1000)
        cy.get("#ember29").click()
        cy.wait(1000)
        cy.screenshot(nombreArchivo())

        //crear
        //Redirected to dashboard
        
          cy.wait(1000)
          //Go to pages list
          cy.get('nav.gh-nav  ').within(() => {
              cy.wait(500)
              cy.get('a[href*="#/tags/"]').parent().click()
          })
          cy.wait(500)
          //Select New tag
          cy.get('header.gh-canvas-header-content').within(() => {
              cy.wait(500)
              cy.get('a[href*="#/tags/new/"]').click()
          })
          cy.wait(500)
          //Fill form tag
          cy.get('form').within(() => {
            cy.get('#tag-name').type(userData.cadena)
            cy.get('div.input-color').within(() => {
               cy.get('.gh-input').type(userData.cadena)
            })
             //cy.get('#tag-slug').type(userData.cadenaLarga)
             //cy.get('#tag-description').type(userData.cadenaLarga)
          })
          cy.wait(500)
          //Click save tag
          cy.get('button[type=button]').contains('Save').click()
          cy.wait(1000)
         
          
          
         cy.get('span.error').should('contain', 'The colour should be in valid hex format')
          
          
        cy.wait(1000)
        cy.screenshot(nombreArchivo())

        
    })
  })