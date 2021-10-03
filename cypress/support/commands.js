// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
const usuarios1 = require("../fixtures/usuarios1.json");
const usuarios2 = require("../fixtures/usuarios2.json");
const usuarios3 = require("../fixtures/usuarios3.json");


import 'cypress-iframe'
///import { contains } from 'cypress/types/jquery';

Cypress.Commands.add('url', () => {
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
})



Cypress.Commands.add('camposEBotao', () => {
    cy.get('label[for="name"]').should('contain', 'Nome')
    cy.get('label[for="email"]').should('contain', 'E-mail')
    cy.get('label[for="password"]').should('contain', 'Senha')
    cy.get('button#register').should('contain', 'Cadastrar')



})

Cypress.Commands.add('camposVazios', () => {
    cy.get('input#name').should('be.empty')
    cy.get('input#email').should('be.empty')
    cy.get('input#password').should('be.empty')

})


Cypress.Commands.add('verificacaoTabelaDeUsuarios', () => {
    cy.get('input#name').type('1')
    cy.get('input#email').type('1')
    cy.get('input#password').type('1')
    cy.get('button#register').click()
    cy.get('body').should('not.be.contain', 'Usuários cadastrados')
})


Cypress.Commands.add('errosDeTela', () => {
    cy.get('button#register').click()
    cy.get('p.error').should('contain.text', 'O campo Nome é obrigatório.')
    cy.get('p.error').should('contain.text', 'O campo E-mail é obrigatório.')
    cy.get('p.error').should('contain.text', 'O campo Senha é obrigatório.')


})

Cypress.Commands.add('errosDeTelaSeparados', () => {

    cy.get('input#name').type('João Barros')
    cy.get('button#register').click()
    cy.get('p.error').should('not.contain.text', 'O campo Nome é obrigatório.')

    cy.get('input#email').type('joaobarros@gmail.com')
    cy.get('button#register').click()
    cy.get('p.error').should('not.contain.text', 'O campo E-mail é obrigatório.')

    cy.get('input#password').type('12345678')
    cy.get('button#register').click()
    cy.get('body').should('not.contain.text', 'O campo Senha é obrigatório.')

})

Cypress.Commands.add('campoObrigatorioNomeIncorreto', () => {
    cy.get('input#name').type('Erica')
    cy.get('input#email').type('erica@gmail.com')
    cy.get('input#password').type('45114741')
    cy.get('#register').click()
    cy.get('.error').should('contain', 'Por favor, insira um nome completo.')

})

Cypress.Commands.add('campoObrigatorioEmailIncorreto', () => {
    cy.get('input#name').type('Carlos Murilo')
    cy.get('input#email').type('carlos.com')
    cy.get('input#password').type('45114741')
    cy.get('#register').click()
    cy.get('.error').should('contain', 'Por favor, insira um e-mail válido')

})

Cypress.Commands.add('campoObrigatorioSenhaIncorreto', () => {
    cy.get('input#name').type('Fabio Luis')
    cy.get('input#email').type('fabioluis@teste.com')
    cy.get('input#password').type('451')
    cy.get('#register').click()
    cy.get('.error').should('contain', 'A senha deve conter ao menos 8 caracteres.')
})

Cypress.Commands.add('cadastrandoUmUsuarios', () => {

    usuarios1.forEach((item, index) => {

        cy.get('input#name').type(item.nome)

        cy.get('input#email').type(item.email)

        cy.get('input#password').type(item.senha)

        cy.get('button#register').click()





    });
});

Cypress.Commands.add('cadastrandoDoisUsuarios', () => {

    usuarios2.forEach((item, index) => {

        cy.get('input#name').type(item.nome)

        cy.get('input#email').type(item.email)

        cy.get('input#password').type(item.senha)

        cy.get('button#register').click()





    });
});


Cypress.Commands.add('cadastrandoQuadroUsuarios', () => {

    usuarios3.forEach((item, index) => {

        cy.get('input#name').type(item.nome)

        cy.get('input#email').type(item.email)

        cy.get('input#password').type(item.senha)

        cy.get('button#register').click()





    });
});