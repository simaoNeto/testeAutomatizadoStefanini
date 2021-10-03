/// <reference types="cypress" />

// Quando eu acionar a opção Excluir de um elemento da tabela de usuários, o sistema deve excluir a linha em
// questão, exibindo a tabela sem interferir nos ids dos demais itens e em sua ordenação.

 describe("Funcionalidade: Validar opção excluir.", () => {
    context(
        "Dado que acesso a página de Cadastro de usuários.E cadastro alguns usuários. ",
        () => {
            beforeEach(() => {
                cy.url()
            });
            it("E excluo um elemento da tabela de usuário. Então o sistema exclui a linha, exibindo a tabela sem interferencia nos ids dos demais itens e sua ordenação.", () => {

                cy.cadastrandoQuadroUsuarios()
                cy.get('table>tr').should('have.length', 4)

                cy.get('a#removeUser3').click()

                cy.get('table>tr').should('have.length', 3)

                cy.get('body').should('contain.html', 'removeUser1').and('contain','Excluir')
                cy.get('body').should('contain.html', 'removeUser2').and('contain','Excluir')
                cy.get('body').should('contain.html', 'removeUser4').and('contain','Excluir')
           
                cy.screenshot('body')
            });




        });
});