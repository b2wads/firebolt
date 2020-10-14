describe('App', () => {
  before(() => {
    cy.visit('/')
  })

  it('Shows Welcome', () => {
    cy.get('[data-cy="welcome"]').should('be.visible')
  })
})
