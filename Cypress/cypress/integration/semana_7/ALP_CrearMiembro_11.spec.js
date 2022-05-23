// USANDO VERSION Ghost 4.44.0 
const { faker } = require('@faker-js/faker');
const urlProbar = "http://localhost:3002/ghost";

let userData = {
  nombre:  faker.name.firstName()+' '+faker.name.lastName() ,
  primerNombre:faker.name.firstName(),
  apellido: faker.name.lastName() ,
  email:  faker.internet.email(),
  password:  faker.name.firstName(),
  cadena: faker.company.companyName(),
  cadenaLarga: faker.lorem.paragraphs().substring(0,500)
}

const numEscenario = "1";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}


describe('Crear miembro con nota de 500 caracteres', () => {
    beforeEach(()=>{
       cy.visit(urlProbar)
        cy.wait(1000)
       
    })
    

    it('Crear miembro con nota de 500 caracteres', ()=>{
        //loguease
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('Mari123456')
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
        cy.visit(urlProbar+'/#/members')
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        //crear usuario de prueba

        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/new/"]').click()
        })
        cy.wait(500)
        cy.get('form').within(() => {
          
        
            cy.get('#member-name').type(userData.nombre,{force: true})
            cy.get('#member-email').type(userData.email,{force: true})
            cy.get('.ember-power-select-trigger-multiple-input').type(userData.cadena,{force: true})
            cy.get('.gh-member-details-textarea').type(userData.cadenaLarga ,{force: true})
        })
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button[type=button]').click()
        })
        cy.wait(1500)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        //ver lista de mimbros
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        //Selecionar el creado
        cy.get('table').within(() => {
            cy.get('tr').filter(`:contains(${userData.nombre})`).click()
        })
        cy.wait(1500)

 
        cy.get("header.gh-canvas-header-content").within(() => {
            cy.wait(500)
            cy.get('button[role=button]').click()
            cy.wait(500)
            cy.get('ul').within(() => {
                cy.get('li').filter(':contains("Delete member")').click()
            })
        }
        )
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        cy.get('div.fullscreen-modal').within(() => {
            cy.wait(500)
            cy.get('button').filter(':contains("Delete member")').last().click()
        })

      //  cy.get('.red').click()
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())
       
        
    })
  })