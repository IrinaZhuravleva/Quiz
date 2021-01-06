/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('https://irinazhuravleva.github.io/Quiz/')
    })

    it('click on first radio-button', () => {
        cy
            .get('.button--next')
            // .should('have.attr', 'data-next');
            .should('have.css', 'background-color', 'rgb(212, 212, 212)');

        cy.get('.radio-group label:first').click();

        cy
            .get('.button--next')
            .should('not.be.disabled');

        cy
            .get('.button--next')
            .click();

        //здесь 
        cy
            .get('#plate')
            .should('have.attr', 'data-card', 2);
            //атрибут должен увеличиться на 1
        
    })
})