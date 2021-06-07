/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /seven: the days long gone demo/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /beneath a steel sky/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /craft the world - abandoned mines/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
