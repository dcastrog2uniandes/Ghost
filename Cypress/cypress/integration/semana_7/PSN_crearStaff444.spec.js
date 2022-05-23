
const { faker } = require('@faker-js/faker');


const urlProbar = "http://localhost:3001/ghost";

const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}

function crear_datos(){
        
  let userData = {
          caso: 0,
          nombre:  faker.name.firstName()+' '+faker.name.lastName() ,
          primerNombre:faker.name.firstName(),
          apellido: faker.name.lastName() ,
          email:  faker.internet.email(),
          password:  faker.name.firstName()
  }
  let datos = new Array(); 
  console.log(datos)
  datos.unshift(userData)
  console.log(datos)
  console.log("REVISION")
  console.log(datos)
  for (var i = 1; i < 5; i++) {
      userData = {
          caso: i,
          nombre:  faker.name.firstName()+' '+faker.name.lastName() ,
          primerNombre:faker.name.firstName(),
          apellido: faker.name.lastName() ,
          email:  faker.internet.email(),
          password:  faker.name.firstName()
      }
      datos.unshift(userData)
      console.log(datos)
  }
  console.log(datos)
  cy.writeFile("cypress/fixtures/datosGenerados.json",JSON.stringify(datos), null, '\t')
}


describe('Crear Staff - Aleatoria Negativa', () => {
    beforeEach(()=>{
       cy.visit(urlProbar)
       crear_datos();
       
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
        
        cy.fixture('datosGenerados.json').then((userData) => {
            userData.forEach((fixtureData) => {
                cy.visit(urlProbar+'/#/settings/staff')
                cy.wait(500)
                // Capturar Pantalla
                cy.screenshot(nombreArchivo())
            
                cy.contains('Invite people').click()
                cy.wait(500)

                cy.get("#new-user-email").type(fixtureData.nombre)
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