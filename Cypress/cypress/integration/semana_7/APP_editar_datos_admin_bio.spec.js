describe('test ghost', () => {
    beforeEach(function(){
        cy.visit('http://localhost:3002/ghost/')
         cy.wait(2000)
        
         cy.fixture('MOCK_DATA_DANIEL').then((datos) =>{
             this.datos = datos;
         })
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

     it('editar_datos_admin_bio', function(){
         
        const k = Cypress._.random(this.datos.length - 1)
        const dataTest = this.datos[k]

        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
           
        })
        
        
        cy.wait(1000)
        cy.get('nav.gh-nav  ').within(() => {
            cy.get('a[href*="#/settings/"]').click()
        })

         cy.wait(1000)
         cy.get("#staff_svg__Regular").click()
         cy.wait(1000)

        cy.get(".apps-grid").find('a').click();
        cy.wait(1000)


        //EDITAR BIO
        dataTest.bio = dataTest.bio.length < 199 ? dataTest.bio : dataTest.bio.substring(0,199);
        cy.get("#user-bio").clear()
        cy.get("#user-bio").type(dataTest.bio, {force: true});

        
        //GUARDAR CAMBIOS
        cy.wait(1000);
        cy.get('span').contains("Save").click();
        cy.wait(1000);

        //Pagina Admin
        cy.visit("http://localhost:3002/ghost/#/settings/staff");
        cy.wait(1000);
        cy.get(".apps-grid").find('a').click();
        cy.wait(1000)

        //ASSERTS
        

        //assert bio
        cy.get("#user-bio").should("have.value", dataTest.bio);


    })

})