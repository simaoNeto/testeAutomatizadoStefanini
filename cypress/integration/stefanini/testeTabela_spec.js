/// <reference types="cypress" />

// Quando eu acionar a opção Cadastrar tendo preenchido os campos Nome, E-mail e Senha com dados válidos, o
// sistema deve exibir abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção
// Excluir para cada um dos mesmos. A tabela deve exibir os usuários ordenando-os pelo id, do menor ao maior.

describe("Funcionalidade: Validar elementos da tabela com os dados do usuário.", () => {
    context(
        "Dado que acesso a página de Cadastro de usuários. E cadastro alguns usuários.",
        () => {
            beforeEach(() => {
                cy.url()
            });
            it("Então visualizo tabela com os dados do usuário informados anteriormente e a opção Excluir para cada um dos mesmos. E a tabela  exibe os usuários ordenando-os pelo id, do menor ao maior.", () => {

                cy.cadastrandoDoisUsuarios()
                cy.get('body').should('contain.html','tdUserId1').and('contain','1')
                cy.get('body').should('contain.html','tdUserId2').and('contain','2')

                cy.get('body').should('contain.html', 'removeUser1').and('contain','Excluir')
                cy.get('body').should('contain.html', 'removeUser2').and('contain','Excluir')

                cy.screenshot('body')
            });




        });
});