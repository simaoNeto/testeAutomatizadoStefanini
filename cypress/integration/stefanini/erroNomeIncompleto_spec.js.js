/// <reference types="cypress" />

// Quando eu acionar a opção Cadastrar tendo preenchido o campo Nome com apenas o primeiro nome, o sistema
// deve exibir a mensagem "Por favor, insira um nome completo." para o campo Nome. A tabela de usuários não
// deve ser alterada.

 describe("Funcionalidade: Validar campo nome.", () => {
    context(
      "Dado que acesso a página de Cadastro de usuários. E preecho apenas o primeiro nome. ",
      () => {
        beforeEach(() => {
          cy.url()
        });
        it("Então a mensagem de erro 'Por favor, insira um nome completo.', é apresentada.", () => {
          
          cy.cadastrandoUmUsuarios()
          cy.campoObrigatorioNomeIncorreto()
  
          cy.screenshot('body')
        });
      
  
   
   
    });
  });