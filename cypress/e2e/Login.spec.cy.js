/// <reference types='cypress' />

describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    it('Login com sucesso', () => {
        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('a > .hidden-xs').should('contain', 'Welcome')
        })
    });
    it('Login com e-mail desconhecido', () => {
        cy.get('#username').type("emailerrado@gemal.com")
        cy.get('#password').type("testes")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it('Login com senha errada', () => {
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("testes")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
});