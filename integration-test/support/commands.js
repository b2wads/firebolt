Cypress.Commands.add('restoreLocalStorage', key => {
  cy.getCookie(key).then(({ value }) => {
    localStorage.setItem(key, value)
  })
})

Cypress.Commands.add('setLocalStorage', key => {
  cy.restoreLocalStorage(key)
})

Cypress.Commands.add('login', () => {
  cy.request({
    url: Cypress.env('API_URL'),
    method: 'POST',
    body: {
      email: Cypress.env('EMAIL'),
      password: Cypress.env('PASSWORD'),
    },
  })
    .its('body')
    .then(resp => {
      cy.setCookie(Cypress.env('JWT_KEY'), resp.token)
      Cypress.Cookies.defaults({
        whitelist: Cypress.env('JWT_KEY'),
      })
    })
})
