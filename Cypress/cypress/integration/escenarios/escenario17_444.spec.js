describe('test ghost', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3002/ghost')
         cy.wait(2000)
         //cy.get('button').click()
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

     it('Cambiar contraseña', ()=>{
        //Login

        var i = 0;
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.wait(500);
            cy.screenshot(`${i++}`)
            cy.wait(500);
            cy.get('#ember9').type('Mari123456')
            cy.screenshot(`${i++}`);
            cy.get('#ember11').click()
            cy.screenshot(`${i++}`)
           
        })
        
        
        cy.wait(1000)
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/"]').click()
            cy.screenshot(`${i++}`);
        })

         cy.wait(1000)
         cy.get("#staff_svg__Regular").click()
         cy.screenshot(`${i++}`)
         cy.wait(1000)

        cy.get(".apps-card-meta").contains("Admin").click();
        cy.screenshot(`${i++}`)
        cy.wait(1000)

        function insertPassword(passwordN, passwordO) {
            cy.get("#user-password-old").type(passwordO);
            cy.screenshot(`${i++}`)
            cy.wait(500);
            cy.get("#user-password-new").type(passwordN);
            cy.screenshot(`${i++}`)
            cy.wait(500);
            cy.get("#user-new-password-verification").type(passwordN);
            cy.screenshot(`${i++}`)
            cy.wait(500);
            cy.get(".form-group").contains("Change Password").click()
            cy.screenshot(`${i++}`)
            cy.wait(500)

        }

        insertPassword("Mari123456", "Mari123456");
        cy.wait(1000)

        
        //cambio a contraseña anterior
        insertPassword("Mari123456", "Mari123456");
        cy.wait(1000);

        //pruebo que la contraseña cambió
        insertPassword("Mari123456", "Mari123456");
        cy.wait(2000);
        cy.screenshot(`${i++}`);








        
        
    




    })

})

