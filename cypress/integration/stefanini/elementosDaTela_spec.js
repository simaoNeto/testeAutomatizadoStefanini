/// <reference types="cypress" />

// Ao acessar a página do sistema, eu devo visualizar os seguintes elementos:
// ⚫ O campo Nome, para a inserção do texto referente ao nome do usuário a ser adicionado, com o valor inicial
// vazio.
// ⚫ O campo E-mail, para a inserção do e-mail do usuário a ser adicionado, com o valor inicial vazio.
// ⚫ O campo Senha, para a inserção do texto referente à senha do usuário a ser adicionado, devendo exibir os
// caracteres inseridos de forma mascarada, ocultando seus valores. Valor inicial vazio.
// ⚫ O botão Cadastrar, que ao ser clicado deve realizar o envio dos dados inseridos do usuário para a tabela de
// resultados.
// ⚫ A tabela de usuários NÃO deve ser exibida enquanto não houver usuários cadastrados.



describe("Funcionalidade: Validar elementos da tela de login", () => {
  context(
    "Dado que acesso a página de Cadastro de usuários.",
    () => {
      beforeEach(() => {
        cy.url()
      });
      it("Então visualizo os campo Nome, Email, Senha e botão Cadastrar.", () => {
        cy.camposEBotao()

        cy.screenshot('body')
      });


      
          it("E tenho acesso aos campos vazios.", () => {
            cy.camposVazios()

            cy.screenshot('body')
          });



      
     
          it("Então a tabela de usuários não é apresentada. ", () => {
            cy.verificacaoTabelaDeUsuarios()

            cy.screenshot('body')
          });



        });
   
      });