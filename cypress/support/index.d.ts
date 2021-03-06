// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

type UserAttributes = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to sign up a user
     * @example cy.signUp({username: 'foo', email: 'foo@email.com', password: '123456'})
     */
    signUp(user: UserAttributes): Chainable<Element>

    /**
     * Custom command to sign in
     * @example cy.signUp()
     */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Window>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to get fields by label
     * @example cy.getFields([{label: 'foo', name: 'foo}])
     */
    getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to check if value is less than
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is greater than
     * @example cy.shouldBeGreaterThan(50)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>
  }
}
