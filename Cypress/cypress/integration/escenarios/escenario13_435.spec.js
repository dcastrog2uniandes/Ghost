


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
  return `scenario${numEscenario}/Cypress_${numEscenario}_v435_${seqImg}`
}


describe('Loguearme y Crear Staff', () => {
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

    it('Create an user and login', ()=>{
        cy.get('#ember7').type( 'ghost_uniandes@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        // Capturar Pantalla

        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        cy.visit('http://localhost:3001/ghost/#/settings/staff')
        cy.wait(1000)
       // Capturar Pantalla
       cy.screenshot(nombreArchivo())
       
        cy.contains('Invite people').click()
        cy.wait(1000)

        cy.get("#new-user-email").type(userData.email)
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
        cy.contains('Send invitation now').click()
       
         //ver lista de miembros
         cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
       // Capturar Pantalla
        cy.screenshot(nombreArchivo())
            cy.get('a[href*="#/members/"]').parent().click()
        })


        //seleccionar nuevo miembro
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        // listar  los del staff
        cy.visit('http://localhost:3001/ghost/#/settings/staff')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        
 
        
        cy.get('div.apps-grid').within(() => {
          cy.wait(500)
          cy.get('.apps-card-app').filter(':contains("'+userData.email+'")').within(() => {
              cy.wait(500)
              cy.get('.apps-configured-action').first().click()
          })
          
         })
         cy.wait(500)
         cy.screenshot(nombreArchivo())

       

        
    })
  })