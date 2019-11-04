# Comandos do Cypress:

## Comando de login
Foi feito para ser usado em qualquer tela que tenha algum tipo de autentiação.
Para usar esse comando em seus testes, você deve executar o comando de login no before do seu teste:

```
describe('Meu teste', () => {
  before(() => {
    cy.login();
    cy.visit('/minha-pagina-autenticada');
  });
})

```

### O comando de login espera algumas variáveis de ambiente:

1- API_URL: url da sua api backend, que será usada para logar o usuário
2- EMAIL: email do usuário que será logado
3- PASSWORD: senha do usuário que será logado
4- JWT_KEY: Chave de auntenticação que será guardada no localstorage

### Caso você utilize o comando de login, deverá rodar o cypress da seguinte maneira

```
API_URL=www.sua-api.com.br EMAIL=usuario@gmail.com PASSWORD=senha JWT_KEY=chave_jwt yarn cypress:open
```