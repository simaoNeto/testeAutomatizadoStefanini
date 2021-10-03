/// <reference types="cypress" />

// Quando eu acionar a opção Cadastrar tendo preenchido o campo E-mail com um e-mail inválido, o sistema deve
// exibir a mensagem "Por favor, insira um e-mail válido." Para o campo E-mail. A tabela de usuários não deve ser
// alterada.

 describe("Funcionalidade: Validar campo email.", () => {
    context(
      "Dado que acesso a página de Cadastro de usuários. E preechoo o campo com um e-mail inválido. ",
      () => {
        beforeEach(() => {
          cy.url()
        });
        it("Então visualizo a mensagem 'Por favor, insira um e-mail válido.'", () => {
          
          cy.cadastrandoUmUsuarios()
          cy.campoObrigatorioEmailIncorreto()
  
          cy.screenshot('body')
        });
      
  
   
   
    });
  });