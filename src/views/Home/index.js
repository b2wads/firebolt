import React from 'react'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'
import styles from './home.styl'
import Grimorio from '~/assets/images/logo-grimorio.png'

import Dependencies from '~/components/dependencies'

export default function Home() {
  function commands() {
    return (
      <div>
        <h2>Comandos </h2>
        <span>
          Alguns comandos que estão disponívels para serem executados na pasta
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

  function listDependencies() {
    return <Dependencies />
  }

  function structure() {
    return (
      <div className={styles.structure}>
        <h2>Estrutura</h2>
        <span>
          Esse repositório oferece uma estrurura padrão para dar início à
          projetos React. Alguns exemplos dessas ferramentas:
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
          <a href="https://github.com/b2wads/react-boilerplate/wiki">
            Documentação
          </a>
        </span>
      </footer>
    )
  }

  function header() {
    return (
      <div className={styles.header}>
        <img src={Grimorio} height={80} width={100} alt="Logo do Grimório" />
        <h1>Welcome to React Boilerplate</h1>
      </div>
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
