Cypress.Commands.add('restoreLocalStorage', key => {
  cy.getCookie(key).then(({ value }) => {
    localStorage.setItem(key, value);
  });
});

Cypress.Commands.add('setLocalStorage', key => {
  cy.restoreLocalStorage(key);
});

Cypress.Commands.add('login', () => {
  cy.request({
    url: 'http://b2wads-api-staging-1.us-east-1.elasticbeanstalk.com/api/auth',
    method: 'POST',
    body: {
      email: Cypress.env('EMAIL'),
      password: Cypress.env('PASSWORD'),
    },
  })
    .its('body')
    .then(resp => {
      cy.setCookie('_user_seller', resp.token);
      Cypress.Cookies.defaults({
        whitelist: '_user_seller',
      });
    });
});
