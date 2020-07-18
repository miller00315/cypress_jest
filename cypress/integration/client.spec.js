/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // https://on.cypress.io/interacting-with-elements

  it('Ao acessra home deve conter uma lista com 5 items', () => {
    // https://on.cypress.io/type
    cy.get('tbody tr').should('have.length', 5);
  });
});
