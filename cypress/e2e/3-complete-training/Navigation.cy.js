// go()

describe('mysuite', () => {
    it('NavigationTest', () => {
        cy.visit("https://demo.spreecommerce.org/");

        cy.title().should('eq', "Plush");

        // Click on the Fashion category using XPath
        cy.xpath("(//span[text()='Fashion'])[1]").click({ force: true }); // { force: true } to solve timeout issue!

        // Optionally, you can add assertions to confirm navigation
        cy.url().should('include', '/fashion'); // adjust the URL based on the expected behavior

        cy.go('back');
        cy.title().should('eq', "Plush");

        cy.go('forward')
        cy.wait(2000);
        cy.xpath("//h1[text()='Fashion']").should('have.text','Fashion')

        cy.go(-1) // -1 >> Back
        cy.wait(2000);
        cy.title().should('eq', "Plush");

        cy.go(1) // 1 >> Forward
        cy.wait(2000);
        cy.xpath("//h1[text()='Fashion']").should('have.text','Fashion')

        // cy.reload()
    });
});
