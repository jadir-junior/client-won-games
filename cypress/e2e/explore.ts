/// <reference path="../support/index.d.ts" />

import {
  genreFields,
  platformsFields,
  priceFields,
  sortFields
} from '../../src/utils/filter/fields'

describe('Explore', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters column', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.shouldRenderFields(sortFields)
    cy.shouldRenderFields(priceFields)
    cy.shouldRenderFields(platformsFields)
    cy.shouldRenderFields(genreFields)
  })
})
