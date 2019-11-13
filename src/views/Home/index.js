import React from 'react'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'
import MainButton from '~/components/button/button'
import styles from './home.styl'
import Logo from '~/assets/images/logo-grimorio.png'

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <img src={Logo} height={80} width={100} alt="Logo do Grimório" />
        <h1>Welcome to React Boilerplate</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.instructions}>
          <h2>Instruções</h2>
          <span>
            Esse repositório oferece uma esturura padrão para dar início à
            projetos React. Aqui você encontra integrações com algumas
            ferramentas, como:
          </span>
          <ul>
            <li>
              <a href="http://redux.js.org/docs/introduction/"> Redux</a>
            </li>
            <li>
              <a href="http://eslint.org/">Eslint</a>
            </li>
            <li>
              <a href="https://prettier.io/">Prettier</a>
            </li>
            <li>
              <a href="https://jestjs.io/"> Jest </a>
            </li>
            <li>
              <a href="http://stylus-lang.com/"> Stylus </a>
            </li>
            <li>
              <a href="https://www.cypress.io/"> Cypress </a>
            </li>
            <li>
              <a href="https://github.com/b2wads/grimorio-ui"> Grimorio </a>
            </li>
          </ul>
          <span>
            Para utilizar esse Boilerplate em seu projeto, é só clonar e começar
            a codar.
          </span>
          <h2>Comandos </h2>
          <ul>
            <li>
              <strong>yarn</strong>: Instala os módulos do projeto
            </li>
            <li>
              <strong>yarn start:dev</strong>: Start do projeto, rodando em
              [http://localhost:8080]
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
              <strong>yarn create:redux nome-do-componente </strong>: Cria pasta
              com os arquivos de um componente conectado ao Redux
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
          <h2>Manual </h2>
          <span>
            Quer saber mais ou tirar dúvidas sobre esse projeto? Leia a nossa
          </span>
          <a href="https://github.com/b2wads/react-boilerplate/wiki">
            [Documentação]
          </a>
        </div>
        <div className={styles.exampleComponents}>
          <h2>Exemplos de componentes</h2>
          <span>
            Abaixo temos alguns exemplos de componentes que podem ser criados e
            utilizados a partir do boilerplate
          </span>
          <div>
            <CounterConnect />
            <CounterNotConnect />
            <h3>Componente com CSS Modules</h3>
            <MainButton>Botão com margem</MainButton>
          </div>
        </div>
      </div>
    </div>
  )
}
