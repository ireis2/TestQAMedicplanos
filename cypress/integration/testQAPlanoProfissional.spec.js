///<reference types="cypress"/>

import datafactory from "../factories/datafactory"


describe('NAVEGAR PARA A PÁGINA CADASTRO', () => {
    it('Validar se foi direcionado para página cadastro', () => {
        cy.visit('/register')
        cy.get('.register_title__I6WU5').should('have.text', "Peça agora o seu cartão")
    })
})
describe('TESTE FELIZ SOLICITAR CARTÃO PLANO PROFISSIONAL', () => {   
    it('Preencher Cadastro e escolher Plano Profissional', function ()  {
        var data = datafactory.register()
        cy.get('#name').should('be.empty').clear().type(data.name)
        cy.get('#phone').should('be.empty').clear().type(data.phone)
        cy.get('form [type="submit"]').should('not.be.disabled').click({multiple:true})
    })
    it('Validar página dados pessoais', () => {
        cy.get('.register_formContainerTwoPage__3JIgA h2').should('have.text', "Dados Pessoais")
    })
    it('Preencher Dados Pessoais', function () {
        var data = datafactory.register()
        cy.get('#cpf').should('be.empty').clear().type(data.cpf)
        cy.get('#rg').should('be.empty').clear().type(data.rg)
        cy.get('#email').should('be.empty').clear().type(data.email)
        cy.get('#birthday').should('be.empty').clear().type(data.birth)
        cy.get('#maritalStatus').select('3')
        cy.get('#gender').select('2')
    })
    it('Submeter formulario', () => {
        cy.get('.register_btnProximo__1JVOr > .styles_button__1Rs_e').should('not.be.disabled').click()
    })
    it('Validar e Preencher Dados de Endereço', function ()  {
        var data = datafactory.register()
        cy.get('.register_formContainerThirdPage__1XFA5 h2').contains("Dados de endereço")
        cy.get('#cep').should('be.empty').clear().type(data.address.cep)
        cy.get('#street').should('be.empty').clear().type(data.address.street)
        cy.get('#number').should('be.empty').clear().type(data.address.number)
        cy.get('#complement').should('be.empty').clear().type(data.address.complement)
        cy.get('#city').should('be.empty').clear().type(data.address.city)
        cy.get('#district').should('be.empty').clear().type(data.address.districty)
        cy.get('select[name="uf"]').select('SP')
    })
    it('Submeter formulário de endereço', () => {
        cy.get('.register_btnProximo__1JVOr button[type="submit"]').should('be.visible').click()
    })   
    it('Validar página e Escolher plano Profissional', () => {
        cy.get(' .register_formContainerFourPage__26PbA h2').contains("Escolha seu Plano")
        cy.get('button #profissional').click()
    })
    it('Validar página, resumo do plano escolhido e escolher a forma de pagamento boleto', () => {
        cy.get('.register_formContainerFivePage__3vtUs .register_title__I6WU5').should('have.text', "Forma de pagamento")
        cy.get('.register_resume__5VrQU p').should('have.text', "Resumo:Plano Profissional R$ 64,00/mês")
        cy.get('.PaymentTab_activetabs__1x8Ry p ').click()
    })
    it('Submeter botão Gerar Boleto', () => {
        cy.get('.register_btnFivePage__3V7HY button[type="button"]').click()
    })
    it('Validar título da página Pedido Concluído', () => {
        cy.get('.register_formContainerSevenPage__1jJen h2').should('have.text', "Pedido concluído!")
    })
    it('Submeter e concluir cadastro', () => {
        cy.get('a button').click()
    })
})