/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have a title of categories', () => {
    cy.url().should('include', '/');

    cy.contains('Categories');
    cy.contains('Photos');
    cy.contains('Jobs');
  });

  it('should navigate to the photos page', () => {
    cy.get('a[href*="/photos"]').click();
    cy.url().should('include', '/photos');
  });

  it('should navigate to the jobs page', () => {
    cy.get('a[href*="/jobs"]').click();
    cy.url().should('include', '/jobs');
  });
});
