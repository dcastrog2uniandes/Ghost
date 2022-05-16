
const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v435_${seqImg}`
}


describe('Loguearme y eliminar tag', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3001/ghost')
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

    it('Loguease y eliminar un tag', ()=>{
      
    
       
        cy.get('#ember7').type('ghost_uniandes@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(1000)
        cy.get("#ember29").click()
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("h3[class='gh-tag-list-name']:first").click()
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("button[class='gh-btn gh-btn-red gh-btn-icon']").click()
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get('button').filter(':contains("Delete")').last().click()
        cy.screenshot(nombreArchivo())
        
    })
  })