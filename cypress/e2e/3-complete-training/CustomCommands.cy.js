describe('Custom Commands',() => {

    // Note: to run only one test case make it ( it.only )

    it("handling Links", () => {
        // Add this to handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent Cypress from failing the test
            return false;
        });
    
        cy.visit("https://platform.fynd.com/");
        
        //direct - without using custom command
        //cy.get('.login-wrapper > #login-block').click();
        
        //using custom command from support folder
        cy.clickLink("Login")
         cy.get('h1.title.bold-xxxxl').should('have.text', 'Login to Fynd Platform');
    });
    

    it("overwriting existing command", () => {
        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore cross-origin script errors
            if (err.message.includes('cross origin')) {
                return false;
            }
            return false;
        });
    
        cy.visit("https://platform.fynd.com/");
        cy.clickLink("LOGIN");
        cy.get('h1.title.bold-xxxxl').should('have.text', 'Login to Fynd Platform');
    });
    

    it.only("Login command", () => {

            // Add this to handle uncaught exceptions
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Return false to prevent Cypress from failing the test
                return false;
            });
        
            cy.visit("https://platform.fynd.com/");
            
            cy.clickLink("Login")
            // New custtom command from support folder
            cy.loginapp("mahmoudmesalem23@gmail","1","3","5","7","9","11")
    })

})