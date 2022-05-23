function generateString(lenght) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!°|@&*+?¡¿';
    const charactersLength = characters.length;
    var result = '';
    for (let i = 0; i < lenght; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}


describe('test ghost', () => {
    beforeEach(function(){
        cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)

        
        cy.task("dataexist", "cypress/fixtures/MOCK_DATA_CREADA.json");
         
        
        cy.readFile("cypress/fixtures/MOCK_DATA_CREADA.json").then((list)=>{
             list.push({password: generateString(10)})
             cy.writeFile("cypress/fixtures/MOCK_DATA_CREADA.json", list);
         })

         cy.fixture("MOCK_DATA_CREADA").then(function(datos) {

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

     it('cambiar_admin_contraseña_los_tres_campos', function(){

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

        //EDITAR CONTRASEÑA

      //  cy.get("#user-name").type(, {force:true});
              
        cy.get("#user-password-old").type("Mari123456");
        cy.wait(500);
        cy.get("#user-password-new").type(dataTest.password);
        cy.wait(500);
        cy.get("#user-new-password-verification").type(dataTest.password)
        cy.wait(1000);

        //CONFIRMAR PASSWORD
        cy.get(".form-group").contains("Change Password").click()
        

        //Pagina Admin
        cy.visit("http://localhost:3002/ghost/#/settings/staff");
        cy.wait(1000);
        cy.get(".apps-grid").find('a').click();
        cy.wait(1000)

        //DEVOLVER PASSWORD ANTERIOR
        cy.get("#user-password-old").type(dataTest.password);
        cy.wait(1000);
        cy.get("#user-password-new").type("Mari123456");
        cy.wait(1000);
        cy.get("#user-new-password-verification").type("Mari123456");
        
        //CONFIRMAR PASSWORD
        cy.wait(1000);
        cy.get(".form-group").contains("Change Password").click()



        //ASSERTS
        



    })

})
