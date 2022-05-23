
const numEscenario = "XX";
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
    

    it('Eliminar miembro', ()=>{
        //loguease
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('Mari123456')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        cy.screenshot(nombreArchivo())
        cy.visit('http://localhost:3002/ghost/#/members')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
       

        //ver lista de mimbros
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        //Selecionar el creado
        cy.contains('@hotmail.com').parent().click()
        cy.wait(1500)
        cy.screenshot(nombreArchivo())
        //borrar
        cy.get("header.gh-canvas-header-content").within(() => {
            cy.wait(500)
            cy.get('button[role=button]').click()
            cy.wait(500)
            cy.screenshot(nombreArchivo())
            cy.get('ul').within(() => {
                cy.get('li').filter(':contains("Delete member")').click()
            })
            cy.screenshot(nombreArchivo())
        }
        
        )
        //cancelar
        cy.wait(1000)
        cy.get('button').filter(':contains("Cancel")').last().click()
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
      //  cy.get('.red').click()
       
        
    })
  })