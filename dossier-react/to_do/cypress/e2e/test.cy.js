describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
    cy.contains('children').click();
    cy.url().should('contains','traversal')
  })
})