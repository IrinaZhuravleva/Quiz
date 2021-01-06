/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('https://irinazhuravleva.github.io/Quiz/')
    })

    it('click on first radio-button', () => {
        cy
            .get('.button--next')
            .should('be.disabled');

        // cy.get('.radio-group label:first').click();

        // cy
        //     .get('.button--next')
        //     .should('not.be.disabled');
            // .should('have.css', 'background-color', '#09ac0c');
    })
})