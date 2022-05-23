function generateString(lenght) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    var result = '';
    for (let i = 0; i < lenght; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

describe('test ghost', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3002/ghost/');
        cy.wait(2000)
        
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

     it('Edittag_nombre_y_descripcion', ()=>{

        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
            cy.wait(1000);
        })
        
        //ingresar a vista tag
        cy.wait(1000)
        cy.get("#ember29").click()
        cy.wait(1000)


        //CREAR TAG
        cy.get("a[href='#/tags/new/']").contains("New tag").click()
        cy.wait(2000);
        
        let nombreTagC= generateString(6);
        cy.get("#tag-name").type(nombreTagC);
        cy.wait(1000);
      //  cy.get("#tag-slug").type("Nslug");
       // cy.wait(1000);
        let descripcionTagC = `${generateString(20)}${generateString(20)}`
        cy.wait(500);
        cy.get("#tag-description").type(descripcionTagC);
        cy.wait(1000);

        cy.get('.upload-form').find('svg').click();
        cy.wait(1000);
        cy.get('.gh-unsplash-grid-column')
        .eq(Math.round(Math.random())).trigger('mousehover', {force:true}).find('a')
        .contains("Insert image").click();
        cy.wait(1000);
        cy.get("button[type='button']").contains("Save").click();
        cy.visit('http://localhost:3002/ghost/#/tags');
        cy.wait(2000);
        

        cy.get("h3[class='gh-tag-list-name']").contains(`${nombreTagC}`).click()
        cy.wait(1000)

        //EDITAR NOMBRE TAG
        cy.get("#tag-name").clear()
        cy.wait(1000)
        let nombreTagE = `${generateString(7)}`
        cy.wait(1000)
        cy.get("#tag-name").type(nombreTagE, {force:true})


    
        //EDITAR DESCRIPCION
        cy.wait(1000);
        cy.get("#tag-description").clear();
        cy.wait(1000);
        let descripcionTagE = `${generateString(20)}${generateString(15)}`;
        cy.get("#tag-description")
        .type(descripcionTagE,{force:true});

        cy.wait(1000)
   
       

        
        //GUARDAR CAMBIOS
        cy.get("button[type='button']").contains("Save").click()
        cy.wait(1000)

        //IR A TAGS
        cy.visit('http://localhost:3002/ghost/#/tags')
        cy.wait(1000)
        cy.get("h3[class='gh-tag-list-name']").contains(`${nombreTagE}`).click()
        cy.wait(1000);

          
        //ASSERTS

        //assert nombre
        cy.get("#tag-name").should("have.value", nombreTagE);

        //assert description
        cy.get("#tag-description").should("have.value", descripcionTagE);

        
        //GUARDAR

        // cy.wait(1000);




    })

})

