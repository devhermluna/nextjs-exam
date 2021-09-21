/// <reference types="cypress" />

describe('Jobs', () => {
  beforeEach(() => {
    cy.intercept('GET', '/jobs*').as('getJobs');
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

  it('should visit the first job item link', () => {
    cy.wait('@getJobs');
    cy.get('#job-results').find('.job-item a').first()
      .invoke('attr', 'href')
      .then((href) => {
        cy.wrap(href).as('url');
        cy.visit(`http://localhost:3000/${href}`);
      });

    cy.get('@url').then((url) => {
      cy.url().should('include', url);
    });
  });
});
