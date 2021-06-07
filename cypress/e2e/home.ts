/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: 'New Games' })
    cy.shouldRenderShowcase({ name: 'Most Popular' })
    cy.shouldRenderShowcase({ name: 'Upcoming' })
    cy.shouldRenderShowcase({ name: 'Free games' })
  })
})
