/// <reference types="cypress" />

context('Misc', () => {
    beforeEach(() => {
        cy.visit('https://irinazhuravleva.github.io/Quiz/')
    })

    it('check sequence of cards forward', () => {

        for (var i = 1; i < 47; i ++ ){
        
        cy.cardCycle(1);
}
        cy.lastCard();

        //потом надо нажать и увидеть текст либо с ошибками, либо со Спасибо,
        // т.е. проверить, что у app  исчез дочерний элемент #card
    })
})