///<reference types="cypress"/>

import datafactory from "../factories/datafactory"


describe('NAVEGAR PARA A PÁGINA CADASTRO', () => {
    it('Validar se foi direcionado para página cadastro', () => {
        cy.visit('/register')
        cy.get('.register_title__I6WU5').should('have.text', "Peça agora o seu cartão")
    })
})
describe('TESTE VALIDAR MENSAGENS DE ERROS DA PRIMEIRA PÁGINA DE CADASTRO', () => {   
    it('Preencher campo nome vazio e validar mensagem de erro', function ()  {
        var data = datafactory.register()
        cy.get('#phone').should('be.empty').clear().type(data.phone)
        cy.get('form [type="submit"]').should('not.be.disabled').click({multiple:true})
        cy.get('.styles_error__8iCqw').should('have.text', 'O nome completo é obrigatório' )
    }) 
    it('Preencher campo nome com menos de 10 caracteres e validar mensagem de erro', function ()  {
        var data = datafactory.register()
        cy.get('#name').should('be.empty').clear().type('Maria')
        cy.get('#phone').should('be.empty').clear().type(data.phone)
        cy.get('form [type="submit"]').should('not.be.disabled').click({multiple:true})
        cy.get('.styles_error__8iCqw').should('have.text', 'O nome deve ter no mínimo 10 caracteres')
    }) 
    it('Preencher campo telefone vazio e validar mensagem de erro', function ()  {
        var data = datafactory.register()
        cy.get('#name').should('be.empty').clear().type(data.name)
        cy.get('#phone').clear()
        cy.get('form [type="submit"]').should('not.be.disabled').click({multiple:true})
        cy.get('.styles_error__8iCqw').should('have.text', 'O telefone é obrigatório' )
    })
    it('Preencher campo telefone com menos de 14 caracteres e validar mensagem de erro', function ()  {
        var data = datafactory.register()
        cy.get('#name').should('be.empty').clear().type(data.name)
        cy.get('#phone').clear().type('213984568')
        cy.get('form [type="submit"]').should('not.be.disabled').click({multiple:true})
        cy.get('.styles_error__8iCqw').should('have.text', 'O telefone deve ter no mínimo 14 caracteres')

    })

})