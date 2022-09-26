/// <reference types='cypress' />
import EnderecoPage from '../support/page-objects/endereco.page'
import { faker } from '@faker-js/faker';

describe('FUncionalidade Endereço', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    })
    it.only('Endereço', () => {
        EnderecoPage.editarEnderecoFaturamento(faker.name.firstName(), faker.name.lastName(), faker.company.companyName(), 'Brasil', faker.address.streetName(), '6546', faker.address.city(), 'São Paulo', '13245390', faker.phone.phoneNumber(), faker.internet.email())
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })
});