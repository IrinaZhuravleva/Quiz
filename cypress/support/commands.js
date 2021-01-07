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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.Commands.add('cardCycle', title => {
Cypress.Commands.add('cardCycle', index => {

        //цвет кнопки Далее disabled
        cy
            .get('.button--next')
            .should('have.css', 'background-color', 'rgb(239, 239, 239)');

        //клик на первом radio-btn
        cy
            .get('.radio-group label:first')
            .click();

        //кнопка Далее is not disabled
        cy
            .get('.button--next')
            .should('not.be.disabled');

        //клик по кнопке Далее
        cy
            .get('.button--next')
            .click();

        //рендеринг следующей карточки на странице
        cy
            .get('#card')
            .should('have.attr', 'data-card', index);
});

Cypress.Commands.add('lastCard', () => {

    //цвет кнопки Далее disabled
    cy
        .get('.button--next')
        .should('have.css', 'background-color', 'rgb(239, 239, 239)');

    //клик на первом radio-btn
    cy
        .get('.radio-group label:first')
        .click();

    //кнопка Далее is not disabled
    cy
        .get('.button--next')
        .should('not.be.disabled');

    //клик по кнопке Далее
    cy
        .get('.button--next')
        .click();

    //рендеринг финальной страницы
    cy.get('p').contains('Спасибо!')
    // cy
    //     .get('#card')
    //     .should('have.attr', 'data-card', index);
});