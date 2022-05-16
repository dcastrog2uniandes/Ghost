describe('Testing Ghost filter publish post', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(2000)
        //cy.get('button').click()
    })

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
	
    it('Escenario 5', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('Mari123456')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        //Go to post list
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').first().parent().click()
        })

        cy.screenshot('1')

        cy.wait(500)
        cy.get('div.gh-contentfilter-type ').click()
        cy.wait(500)
        cy.get('ul.ember-power-select-options').first().within(() => {
            cy.get('li').filter(':contains("All posts")').first().click()
        })

        cy.screenshot('2')

        cy.wait(1000)
        //Go to new post
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/post/"]').click()
        })
        
        cy.screenshot('3')
        //Fill form
        let post_title = 'New Post One'
        let post_body = 'Body post One'
        cy.wait(500)
        cy.get('textarea').type(post_title,{force: true})
        cy.get('div.koenig-editor__editor-wrapper > div').type(post_body,{force: true})
        cy.wait(500)

        cy.screenshot('4')

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').first().parent().click()
        })
       
        cy.wait(500)

        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/post/"]').click()
        })

        cy.screenshot('5')

        cy.wait(500)

        let post_title2 = 'New Post Two'
        let post_body2 = 'Body post Two'
        cy.wait(500)
        cy.get('textarea').type(post_title2,{force: true})
        cy.get('div.koenig-editor__editor-wrapper > div').type(post_body2,{force: true})
        cy.wait(500)

        cy.screenshot('6')

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').parent().click()
        })
       
        cy.wait(500)

        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/post/"]').click()
        })

        cy.screenshot('7')

        cy.wait(500)

        let post_title3 = 'New Post Three'
        let post_body3 = 'Body post Three'
        cy.wait(500)
        cy.get('textarea').type(post_title3,{force3: true})
        cy.get('div.koenig-editor__editor-wrapper > div').type(post_body3,{force: true})
        cy.wait(500)

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').parent().click()
        })
       
        cy.wait(500)

        cy.get('ol').first().within(() => {
            cy.get('li').filter(':contains("New Post Two")').first().click()
        }) 

        cy.screenshot('8')

               
        cy.wait(500)

        cy.get('div.gh-publishmenu').click()

        cy.wait(500)
       
        cy.get('button').filter(':contains("Publish")').last().click()

        cy.wait(500)

        cy.screenshot('9')

        cy.get('div.modal-content').within(() => {
            cy.get('button').filter(':contains("Publish")').last().click()
        })

        cy.wait(500)

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').parent().click()
        })

        cy.wait(500)

        cy.get('div.gh-contentfilter-type ').click()

        cy.wait(500)

        cy.get('ul.ember-power-select-options').first().within(() => {
            cy.get('li').filter(':contains("Published posts")').first().click()
        }) 
        
        cy.screenshot('10')

        cy.wait(500)

    })
  })