# React Boilerplate

Esse repositório representa a esturura padrão para projetos React. Aqui estarão descritas as regras para escrita e estruturação do código dentro do projeto.

## Commands

* **yarn**: Instala os módulos do projeto
* **yarn start:dev**: Start do projeto, rodando em [http://localhost:8080](http://localhost:8080).
* **yarn test**: Roda os testes do projeto, mostrando a cobertura.
* **yarn run cypress:open**: Abre a interface do Cypress para você escolher um teste para rodar.
* **yarn run cypress:run**: Roda os testes do Cypress no console.
* **COMP=nome-do-componente yarn create:redux**: Cria pasta com os arquivos de um componente conectado ao Redux
* **COMP=nome-do-componente  yarn create:comp**: Cria pasta com os arquivos de um componente desconectado do Redux
* **COMP=nome-do-componente  yarn create:view**: Cria pasta com os arquivos de uma view conectada ao Redux

## Estrutura de pastas

```sh
├── src
│   ├── components
│   ├── views
│   │   └── element
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
- [CSS Modules](https://github.com/css-modules/css-modules) - Processo de build para adicionar escopo às classes CSS
- [Prettier](https://prettier.io/)
- [Eslint](http://eslint.org/) - Linter para Javascript.
- [Jest](https://jestjs.io/) - Framework de teste Javascript.
- [Enzyme](http://airbnb.io/enzyme/) - Utilitário de teste para React.
- [Cypress](https://www.cypress.io/) - Framework para teste de integração (End to end)
- [Grimorio](https://github.com/b2wads/grimorio-ui) - React UI Kit

Para remover alguma dependência desse projeto, leia a [documentação](./docs/01-remove-dependencies.md)


## Cypress

Criamos alguns comando para ajudar no processo de testar uma plataforma com autenticação. Para conhecer esses comandos e suas variáveis de ambiente, leia a [documentação](./docs/02-cypress-commands.md)


## Estrutura de pastas

### Component
A pasta Component foi criada com o propósito de guardar os principais componentes da plataforma. Esses componentes devem ser pensados como pedaços de código reaproveitáveis em todo o projeto. Alguns exemplos são: Botão, Tabela, Dropdown, etc.

### View
A pasta View foi pensada para receber as páginas principais da plataforma. Alguns exemplos comuns de páginas são: Home, Login e Dashboard. Essas views são compostas por outros componentes, ou seja, utilizarão os componentes da pasta Component (Botões, Tabelas, etc).

### Element
A pasta Element está localizada dentro das pastas de views. Ela foi pensada para receber os componentes específicos de uma determinada view, ou seja, componentes que não serão reaproveitados em outras partes da plataforma. De um modo geral, os elements são uma maneira de quebrar melhor a estrutura de uma view, para que o arquivo não fique muito grande e complexo.


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

1. [Remover Dependências](https://github.com/b2wads/react-boilerplate/wiki/Remover-depend%C3%AAncias)
2. [Comandos Cypress](./docs/02-cypress-commands.md)
2. [Git Flow](./docs/03-git-flow.md)
3. [Commits](./docs/04-commits.md)