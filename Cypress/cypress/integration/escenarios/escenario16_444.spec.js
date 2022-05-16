describe('test ghost', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3002/ghost');
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

     it('Edit tag', ()=>{

        var i = 0;
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.screenshot(`/${i++}`);
            cy.wait(1000);
            cy.get('#ember9').type('Mari123456')
            cy.screenshot(`/${i++}`);
            cy.wait(1000);
            cy.get('#ember11').click()
            cy.screenshot(`/${i++}`);
            cy.wait(1000);
        })
        
        //tag
        cy.wait(1000)
        cy.get("#ember29").click()
        cy.screenshot(`/${i++}`);
        cy.wait(1000)

        cy.get("a[href='#/tags/new/']").contains("New tag").click()
        cy.wait(2000);
        cy.get("#tag-name").type("NTag");
        cy.wait(1000);
        cy.get("button[type='button']").contains("Save").click();
        cy.visit('http://localhost:3002/ghost/#/tags');
        cy.wait(1000);


        cy.get("h3[class='gh-tag-list-name']:first").click()
        cy.screenshot(`/${i++}`);
        cy.wait(1000)
        cy.get("#tag-name")
        .clear()
        cy.screenshot(`/${i++}`);
        cy.wait(1000)
        cy.get("#tag-name").type("usuario5", {force:true})
        cy.screenshot(`/${i++}`);

        cy.wait(1000)

        cy.get("button[type='button']").contains("Save").click()
        cy.screenshot(`/${i++}`);
        cy.wait(1000);

        cy.get("#tag-name").should("have.value", "usuario5");
        cy.screenshot(`/${i++}`);








    })

})

