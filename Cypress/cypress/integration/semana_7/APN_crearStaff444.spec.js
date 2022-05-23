


const urlProbar = "http://localhost:3001/ghost";

const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}

describe('Crear Staff - Aleatoria Negativa', () => {
    beforeEach(()=>{
       cy.visit(urlProbar)
        cy.wait(1000)
       
    })
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })

    it('Crear Staff con Email invalido', ()=>{
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('Mari123456')
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        
        cy.fixture('MOCK_DATA').then((userData) => {
            userData.forEach((fixtureData) => {
                cy.visit(urlProbar+'/#/settings/staff')
                cy.wait(500)
                // Capturar Pantalla
                cy.screenshot(nombreArchivo())
            
                cy.contains('Invite people').click()
                cy.wait(500)

                cy.get("#new-user-email").type(fixtureData.cadena)
                cy.wait(500)
                // Capturar Pantalla
                cy.screenshot(nombreArchivo())
                cy.contains('Send invitation now').click()
                cy.wait(500)
                cy.get('div.modal-body').within(() => {
                    cy.wait(500)
                    cy.get('.response').should('contain', 'Invalid Email')
                })
                cy.get('a.close').click()
            })
           
        })

        
    })
  })