
const numEscenario = "XX";
let seqImg = 0
function nombreArchivo()
{
  seqImg++
  return `scenario${numEscenario}/Cypress_${numEscenario}_v444_${seqImg}`
}


describe('Loguearme y probar el reeenviar correo', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost')
        cy.wait(1000)
       
    })
    

    it('Reenviar correo', ()=>{
        //loguease
        cy.get('#ember7').type('ghost_uniandes@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
      
        // listar  los del staff
        cy.visit('http://localhost:3002/ghost/#/settings/staff')
        cy.wait(1000)
        cy.screenshot(nombreArchivo())
       
        
        //reenviar el primero de la lista
        
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)').click()
        cy.wait(1500)
        cy.screenshot(nombreArchivo())
 
       
       
       
      //  cy.get('.red').click()
       
        
    })
  })