import React from 'react'
import { Panel } from '@b2wads/grimorio-ui'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'
import styles from './home.styl'
import Grimorio from '~/assets/images/logo-grimorio.png'
import Redux from '~/assets/images/redux.png'
import Eslint from '~/assets/images/eslint.png'
import Prettier from '~/assets/images/prettier.png'
import Jest from '~/assets/images/jest.png'
import Stylus from '~/assets/images/stylus.png'
import ReactRouterDom from '~/assets/images/react-router-dom.png'
import Cypress from '~/assets/images/cypress.png'
import Immer from '~/assets/images/immer.png'

export default function Home() {
  function header() {
    return (
      <div className={styles.header}>
        <img src={Grimorio} height={70} alt="Logo do Grimório" />
        <h1>Welcome to React Boilerplate</h1>
      </div>
    )
  }

  function commands() {
    return (
      <div>
        <h2>Comandos </h2>
        <span>
          Alguns comandos que estão disponíveis para serem executados na pasta
          raiz do projeto:
        </span>
        <ul>
          <li>
            <strong>yarn</strong>: Instala os módulos do projeto
          </li>
          <li>
            <strong>yarn start:dev</strong>: Start do projeto, rodando em
            <a href="http://localhost:8080"> localhost:8080</a>
          </li>
          <li>
            <strong>yarn test</strong>: Roda os testes do projeto
          </li>
          <li>
            <strong>yarn run cypress:open</strong>: Abre a interface do Cypress
            para você escolher um teste para rodar.
          </li>
          <li>
            <strong>yarn run cypress:run</strong>: Roda os testes do Cypress no
            console
          </li>
          <li>
            <strong>yarn create:redux nome-do-componente </strong>: Cria pasta
            com os arquivos de um componente conectado ao Redux
          </li>
          <li>
            <strong>yarn create:comp nome-do-componente</strong>: Cria pasta com
            os arquivos de um componente desconectado do Redux
          </li>
          <li>
            <strong>yarn create:view nome-do-componente</strong>: Cria pasta com
            os arquivos de uma view conectada ao Redux
          </li>
        </ul>
      </div>
    )
  }

  function sideRight() {
    return (
      <div className={styles.commands}>
        {commands()}
        <div className={styles.exampleComponents}>
          <h2>Exemplos de componentes</h2>
          <span>
            Abaixo temos exemplos de componentes que podem ser criados e
            utilizados a partir do boilerplate
          </span>
          <div>
            <CounterConnect />
            <CounterNotConnect />
          </div>
        </div>
      </div>
    )
  }

  function panel(name, url, image) {
    return (
      <Panel className={styles.panel}>
        <a href={url}>
          <img height={50} src={image} alt={`Logo ${name}`} />
        </a>
        <span>{name}</span>
      </Panel>
    )
  }

  function listDependencies() {
    return (
      <ul className={styles.listDependencies}>
        <div className={styles.projects}>
          {panel('Redux', 'https://redux.js.org/', Redux)}
          {panel('Eslint', 'https://eslint.org/', Eslint)}
          {panel('Prettier', 'https://prettier.io/', Prettier)}
        </div>
        <div className={styles.projects}>
          {panel('Jest', 'https://jestjs.io/', Jest)}
          {panel('Stylus', 'http://stylus-lang.com/', Stylus)}
          {panel(
            'React-router-dom',
            'https://reacttraining.com/react-router/web',
            ReactRouterDom
          )}
        </div>
        <div className={styles.projects}>
          {panel('Cypress', 'https://www.cypress.io/', Cypress)}
          {panel('Grimorio', 'https://github.com/b2wads/grimorio-ui', Grimorio)}
          {panel('Immer', 'https://github.com/immerjs/immer', Immer)}
        </div>
      </ul>
    )
  }

  function structure() {
    return (
      <div className={styles.structure}>
        <h2>Estrutura</h2>
        <span>
          Este repositório oferece uma estrutura inicial para projetos React.
          Algumas das ferramentas usadas são:
        </span>
        {listDependencies()}
      </div>
    )
  }

  function footer() {
    return (
      <footer>
        <span>
          Quer saber mais ou tirar dúvidas sobre esse projeto? Leia a nossa
          <a href="https://github.com/b2wads/firebolt/wiki">Documentação</a>
        </span>
      </footer>
    )
  }

  return (
    <div className={styles.content}>
      {header()}
      <div className={styles.container}>
        {structure()}
        {sideRight()}
      </div>
      {footer()}
    </div>
  )
}
