// @ts-check
///<reference path="../global.d.ts" />

// Import Cypress Percy plugin command (https://docs.percy.io/docs/cypress)
import "@percy/cypress";

Cypress.Commands.add("login", (username, password) => {
  cy.getBySel("signin-username").type(username);
  cy.getBySel("signin-password").type(password);

  cy.getBySel("signin-submit").click();
});
