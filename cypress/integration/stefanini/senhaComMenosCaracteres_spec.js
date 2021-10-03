/// <reference types="cypress" />

// Quando eu acionar a opção Cadastrar tendo preenchido o campo Senha com um menos de 8 caracteres, o sistema
// deve exibir a mensagem "A senha deve conter ao menos 8 caracteres." Para o campo Senha. A tabela de
// usuários não deve ser alterada.

 describe("Funcionalidade: Validar campo senha.", () => {
    context(
      "Dado que acesso a página de Cadastro de usuários. E preecho o campo Senha com menos de 8 caracteres.",
      () => {
        beforeEach(() => {
          cy.url()
        });
        it("Então visualizo a mensagem 'A senha deve conter ao menos 8 caracteres.'.", () => {
          
          cy.cadastrandoUmUsuarios()
          cy.campoObrigatorioSenhaIncorreto()

          cy.screenshot('body')
  
        });
      
  
   
   
    });
  });