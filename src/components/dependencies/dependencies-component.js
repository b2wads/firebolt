import React from 'react'
import { Panel } from '@b2wads/grimorio-ui'
import Redux from '~/assets/images/redux.png'
import Eslint from '~/assets/images/eslint.png'
import Prettier from '~/assets/images/prettier.png'
import Jest from '~/assets/images/jest.png'
import Stylus from '~/assets/images/stylus.png'
import ReactRouterDom from '~/assets/images/react-router-dom.png'
import Cypress from '~/assets/images/cypress.png'
import Grimorio from '~/assets/images/logo-grimorio.png'
import Immer from '~/assets/images/immer.png'
import styles from './dependencies.styl'

function Dependencies() {
  function panel(name, url, image) {
    return (
      <Panel className={styles.panel}>
        <a href={url}>
          <img width={50} height={50} src={image} alt={`Logo ${name}`} />
        </a>
        <span>{name}</span>
      </Panel>
    )
  }

  return (
    <ul className={styles.listDependencies}>
      <div className={styles.projects}>
        {panel('Redux', 'https://www.cypress.io/', Redux)}
        {panel('Eslint', 'https://github.com/b2wads/grimorio-ui', Eslint)}
        {panel('Prettier', 'https://github.com/immerjs/immer', Prettier)}
      </div>
      <div className={styles.projects}>
        {panel('Jest', 'https://www.cypress.io/', Jest)}
        {panel('Stylus', 'https://github.com/b2wads/grimorio-ui', Stylus)}
        {panel(
          'React-router-dom',
          'https://github.com/immerjs/immer',
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

export default Dependencies
