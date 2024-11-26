/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add("launch_app",()=>{
    cy.visit('/')
    cy.contains('a','Me want it!').click();
    cy.contains('h1','Welcome to OWASP Juice Shop!').should('be.visible');
    cy.contains('Dismiss').click()
})
Cypress.Commands.add("login",()=>{
      cy.launch_app();
      cy.contains("button", "menu").should("be.visible").click();
      cy.contains("a", " Login ").click({ force: true }, { timeout: 100000 });
      cy.get('#email').type('veanaamar25@gmail.com');
      cy.get('#password').type('123456ABC');
      cy.get('#loginButton').click()
})


