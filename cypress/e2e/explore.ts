/// <reference path="../support/index.d.ts" />

describe('Explore', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render all filters', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')
  })
})
