
const { faker } = require('@faker-js/faker');


let userData = {
  nombre:  faker.name.firstName()+' '+faker.name.lastName() ,
  primerNombre:faker.name.firstName(),
  apellido: faker.name.lastName() ,
  email:  faker.internet.email(),
  password:  faker.name.firstName()
}


const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}

describe('Crear Staff - Aleatoria Negativa', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost')
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
        cy.visit('http://localhost:3002/ghost/#/settings/staff')
        cy.wait(1000)
       // Capturar Pantalla
       cy.screenshot(nombreArchivo())
       
        cy.contains('Invite people').click()
        cy.wait(1000)

        cy.get("#new-user-email").type(userData.nombre)
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
        cy.contains('Send invitation now').click()
       
       cy.get('div.modal-body').within(() => {
        cy.wait(500)
        cy.get('.response').should('contain', 'Invalid Email')
        
       })

        
    })
  })