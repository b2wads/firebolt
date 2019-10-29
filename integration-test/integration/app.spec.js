describe('App', () => {
  before(() => {
    cy.visit('/')
  })

  it('Click Button', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('hello world!')
      })
  })
})
