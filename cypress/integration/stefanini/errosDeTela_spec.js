/// <reference types="cypress" />

// Quando eu acionar a opção Cadastrar sem ter preenchido algum dos campos, o sistema deve exibir uma
// mensagem de erro para cada um dos campos não preenchidos. A tabela de usuários não deve ser alterada.

describe("Funcionalidade: Validar mensagens de erro.", () => {
  context(
    "Dado que acesso a página de Cadastro de usuários.",
    () => {
      beforeEach(() => {
        cy.url()
      });
      it("E não preencher os campos obrigatórios, são apresentadas mensagens de erros.", () => {
        cy.errosDeTela()


        cy.screenshot('body')
      });


    
  context(
    "Dado que acesso a página de Cadastro de usuários.",
    () => {
      it("E deixo de preencher ao menos um campo, uma mensagem de erro é apresentada", () => {
        cy.errosDeTelaSeparados()

        cy.screenshot('body')

      });



    });


      it("Então a tabela de usuários não é alterada.", () => {
        cy.cadastrandoUmUsuarios()
        cy.errosDeTela()
        cy.get('body').should('contain.html','tdUserId1')

        cy.screenshot('body')
      });



    });
  });

