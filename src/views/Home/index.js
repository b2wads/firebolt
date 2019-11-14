import React from 'react'
import { Panel } from '@b2wads/grimorio-ui'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'
import MainButton from '~/components/button/button'
import styles from './home.styl'
import Logo from '~/assets/images/logo-grimorio.png'
import ReduxLogo from '~/assets/images/redux.png'

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <img src={Logo} height={80} width={100} alt="Logo do Grimório" />
        <h1>Welcome to React Boilerplate</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.instructions}>
          <h2>BLA BLA BLA</h2>
          <span>
            Esse repositório oferece uma estrurura padrão para dar início à
            projetos React. Alguns exemplos dessas ferramentas:
          </span>
          <ul className={styles.listDependencies}>
            <div className={styles.firstNames}>
              <Panel className={styles.teste}>
                <a href="http://redux.js.org/docs/introduction/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Redux</span>
              </Panel>

              <Panel className={styles.teste}>
                <a href="http://eslint.org/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo do redux"
                  />
                </a>
                <span>Eslint</span>
              </Panel>
              <Panel className={styles.teste}>
                <a href="https://prettier.io/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Prettier</span>
              </Panel>
              <Panel className={styles.teste}>
                <a href="https://jestjs.io/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Jest</span>
              </Panel>
            </div>
            <div className={styles.secondNames}>
              <Panel className={styles.teste}>
                <a href="http://stylus-lang.com/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Stylus</span>
              </Panel>
              <Panel className={styles.teste}>
                <a href="http://stylus-lang.com/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Stylus</span>
              </Panel>
              <Panel className={styles.teste}>
                <a href="https://www.cypress.io/">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Cypress</span>
              </Panel>

              <Panel className={styles.teste}>
                <a href="https://github.com/b2wads/grimorio-ui">
                  <img
                    width={30}
                    height={30}
                    src={ReduxLogo}
                    alt="Logo redux"
                  />
                </a>
                <span>Grimório</span>
              </Panel>
            </div>
          </ul>
          <h2>Manual </h2>
          <span>
            Quer saber mais ou tirar dúvidas sobre esse projeto? Leia a nossa
          </span>
          <a href="https://github.com/b2wads/react-boilerplate/wiki">
            [Documentação]
          </a>
        </div>
        <div className={styles.exampleComponents}>
          <div>
            <h2>Comandos </h2>
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
                <strong>yarn run cypress:open</strong>: Abre a interface do
                Cypress para você escolher um teste para rodar.
              </li>
              <li>
                <strong>yarn run cypress:run</strong>: Roda os testes do Cypress
                no console
              </li>
              <li>
                <strong>yarn create:redux nome-do-componente </strong>: Cria
                pasta com os arquivos de um componente conectado ao Redux
              </li>
              <li>
                <strong>yarn create:comp nome-do-componente</strong>: Cria pasta
                com os arquivos de um componente desconectado do Redux
              </li>
              <li>
                <strong>yarn create:view nome-do-componente</strong>: Cria pasta
                com os arquivos de uma view conectada ao Redux
              </li>
            </ul>
          </div>
          <div className={styles.exampleComponents}>
            <h2>Exemplos de componentes</h2>
            <span>
              Abaixo temos alguns exemplos de componentes que podem ser criados
              e utilizados a partir do boilerplate
            </span>
            <div>
              <CounterConnect />
              <CounterNotConnect />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
