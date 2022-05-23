// USANDO VERSION Ghost 4.44.0 
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


describe('Loguearme y Crear Staff', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost')
        cy.wait(1000)
       
    })
    

    it('Eliminar miembro', ()=>{
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
        cy.visit('http://localhost:3002/ghost/#/members')
        cy.wait(1000)
        // Capturar Pantalla
        cy.screenshot(nombreArchivo())

        //crear usuario de prueba
        let member_name = userData.nombre
        let member_email = userData.email
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/new/"]').click()
        })
        cy.wait(500)
        cy.get('form').within(() => {
            cy.get('#member-name').type(member_name,{force: true})
            cy.get('#member-email').type(member_email,{force: true})
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
            cy.get('tr').filter(`:contains(${member_name})`).click()
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