# React Boilerplate

Esse repositório representa a esturura padrão para projetos React. Aqui estarão descritas as regras para escrita e estruturação do código dentro do projeto.

## Commands

* **yarn**: Instala os módulos do projeto
* **yarn start:dev**: Start do projeto, rodando em [http://localhost:8080](http://localhost:8080).
* **yarn test**: Roda os testes do projeto, mostrando a cobertura.
* **yarn run cypress:open**: Abre a interface do Cypress para você escolher um teste para rodar.
* **yarn run cypress:run**: Roda os testes do Cypress no console.

## Estrutura de pastas

```sh
├── src
│   ├── components
│   ├── views
│   ├── config
│   ├── helpers
│   ├── services
│   ├── styles
│   └── assets
│       ├── fonts
│       ├── images
│       └── icons
├── integration-test
├── public
└── internals
    └── webpack
```

## O que está incluído nesse boilerplate

- [React](https://facebook.github.io/react/)
- [React Router Dom](https://github.com/ReactTraining/react-router)
- [Redux](http://redux.js.org/docs/introduction/)
- [Redux Thunk](http://redux.js.org/docs/introduction/)
- [Babel 7](https://babeljs.io/) - Compilador de Javascript.
- [Webpack](https://webpack.github.io/) - Empacotador de módulos Javascript.
- [Stylus](http://stylus-lang.com/) - Pré-processador CSS
- [Prettier](https://prettier.io/)
- [Eslint](http://eslint.org/) - Linter para Javascript.
- [Jest](https://jestjs.io/) - Framework de teste Javascript.
- [Enzyme](http://airbnb.io/enzyme/) - Utilitário de teste para React.
- [Cypress](https://www.cypress.io/) - Framework para teste de integração (End to end)
- [Grimorio](https://github.com/b2wads/grimorio-ui) - React UI Kit

Para remover alguma dependência desse projeto, leia a [documentação](./docs/01-remove-dependencies.md)

## Padrões de código

### Eslint

Esse projeto usa [eslint](http://eslint.org/) e o [.editorconfig](http://editorconfig.org/) está configurado para ter indentação de **2 espaços**. Você pode alterar isso no arquivo [.eslintrc](https://github.com/lyef/lyef-redux-boilerplate/blob/master/.eslintrc#L16).


### Nomenclatura

A nomenclatura segue as seguintes regras:

 - Arquivos: Nome minpusculo separado por `-`. `nome-de-arquivo.js`.
 - Código: [CamelCase](https://pt.wikipedia.org/wiki/CamelCase). `minhaVariavel`.
 - Objetos JSON: Nome das chaves em [snake_case](https://en.wikipedia.org/wiki/Snake_case).
    ```
      {
        "campo_com_multiplas_palavras": "valor"
      }
    ```

## Manual

1. [Remover Dependências](./docs/01-remove-dependencies.md)
2. [Git Flow](./docs/03-git-flow.md)
3. [Commits](./docs/03-commits.md)