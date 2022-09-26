/// <reference types='cypress' />

describe('Adicionando protudos no carrinho', () => {
    beforeEach(() => {
        cy.visit('produtos')
    })
    it('Adicionar produto no carrinho com sucesso', () => {
        cy.addProduto('3', 'M', 'Green', '3')
    });
    it('Adicionar produto no carrinho com sucesso', () => {
        cy.addProduto('6', 'M', 'Gray', '3')
    });

    it.only('Adicionar produto no carrinho fora de estoque', () => {
        cy.get('[class="image-hover unveil-image"]').eq(2).click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.stock').should('contain', 'Fora de estoque')
    });
});