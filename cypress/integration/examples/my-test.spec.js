/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('https://irinazhuravleva.github.io/Quiz/')
    })

    it('click on first radio-button', () => {
        cy
            .get('.button--next')
            // .should('have.attr', 'data-next');
            .should('have.css', 'background-color', 'rgb(239, 239, 239)');

        cy.get('.radio-group label:first').click();

        cy
            .get('.button--next')
            .should('not.be.disabled');

        cy
            .get('.button--next')
            .click();

        //здесь 
        cy
            .get('#card')
            .should('have.attr', 'data-card', 1);
            //атрибут должен увеличиться на 1

        //полностью повтор цикла
        cy
            .get('.button--next')
            // .should('have.attr', 'data-next');
            .should('have.css', 'background-color', 'rgb(239, 239, 239)');

        cy.get('.radio-group label:first').click();
        
        cy
            .get('.button--next')
            .should('not.be.disabled');

        cy
            .get('.button--next')
            .click();

        //здесь 
        cy
            .get('#card')
            .should('have.attr', 'data-card', 2);

        //потом надо нажать и увидеть текст либо с ошибками, либо со Спасибо,
        // т.е. проверить, что у app  исчез дочерний элемент #card
    })
})