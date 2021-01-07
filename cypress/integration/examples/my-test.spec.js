/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('https://irinazhuravleva.github.io/Quiz/')
    })

    it('check sequence of cards forward', () => {
        
        cy.cardCycle(1);
        cy.cardCycle(2);
        lastCard();

        //потом надо нажать и увидеть текст либо с ошибками, либо со Спасибо,
        // т.е. проверить, что у app  исчез дочерний элемент #card
    })
})