/// <reference types="cypress" />

describe('Jobs', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/jobs*',
    }).as('getJobs');
    cy.visit('http://localhost:3000/jobs');
  });

  it('should have a title of JOBS', () => {
    cy.url().should('include', '/jobs');
    cy.contains('JOBS');
  });

  it('should successfully fetch jobs', () => {
    cy.url().should('include', '/jobs');
    cy.wait('@getJobs').its('response.statusCode').should('eq', 200);
  });

  it('should render the job item in job results', () => {
    cy.wait('@getJobs');
    cy.get('#job-results').find('.job-item').its('length').should('be.greaterThan', 0);
  });
});
