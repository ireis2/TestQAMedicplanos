///<reference types = "Cypress"/>


describe("Navegar à  Homepage", () => {
    it("Validar Homepage", () => {
        cy.visit('/')
        cy.get('.styles_contentTitle__330Ue p').should('have.text', "Cuide da sua saúde com um preço acessível")
    })
    it('Submeter à página cadastro', () => {
        cy.get('.styles_headerButtons__3B23e button a[href="/register"]').should('be.visible').click()
    })    
   
})
