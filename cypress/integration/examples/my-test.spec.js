/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5503/')
    })

    it('check sequence of cards forward', () => {

        // for (var i = 1; i < 48; i ++ ){
        for (var i = 1; i < 2; i++) {
                
            cy.cardCycle(i);
        }
        cy.lastCard();

        //потом надо нажать и увидеть текст либо с ошибками, либо со Спасибо,
        // т.е. проверить, что у app  исчез дочерний элемент #card
    })
})