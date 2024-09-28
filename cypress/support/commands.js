// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// custom command for clicking on link using label

Cypress.Commands.add('clickLink',(label)=>{

    cy.get('a').contains(label).click();  
})

//Over write contains()

Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
    // Determine if a filter argument was passed
    if (typeof text === 'object') {
        options = text;
        text = filter;
        filter = undefined;
    }

    // Ensure case-insensitive matching
    options.matchCase = false;

    return originalFn(subject, filter, text, options);
});


Cypress.Commands.add("loginapp",(email,OTP,OTP2,OTP3,OTP4,OTP5,OTP6)=>{
    cy.get('#nitrozen-inputbl227jaf').type(email)
    cy.get(':nth-child(1) > input').type(OTP)
    cy.get(':nth-child(3) > input').type(OTP2)
    cy.get(':nth-child(5) > input').type(OTP3)
    cy.get(':nth-child(7) > input').type(OTP4)
    cy.get(':nth-child(9) > input').type(OTP5)
    cy.get(':nth-child(11) > input').type(OTP6)
    
})