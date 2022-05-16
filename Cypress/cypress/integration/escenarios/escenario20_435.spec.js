describe('test ghost', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001/ghost/')
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

     it('Revocar subscripcción a un miembro', ()=>{
        //Login
        var i = 0;
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.screenshot(`/${i++}`);
            cy.wait(500);
            cy.get('#ember9').type('Mari123456')
            cy.screenshot(`/${i++}`)
            cy.wait(500);
            cy.get('#ember11').click()
            cy.screenshot(`/${i++}`);
            
        })
        
        //member
        cy.wait(1000)
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
            cy.screenshot(`/${i++}`)
        })
        cy.wait(1000)
        cy.get("table tbody tr").eq(0).click()
        cy.screenshot(`/${i++}`)
        cy.wait(1000)
    

        cy.get("button[class='gh-btn gh-btn-red gh-btn-icon']").click()
        cy.wait(500);
        cy.screenshot(`/${i++}`);
        cy.wait(500);

        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(500)
        cy.screenshot(`/${i++}`);
        cy.wait(500);

    })

})

