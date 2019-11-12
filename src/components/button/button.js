import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@b2wads/grimorio-ui'
import styles from './button.styl'

const MainButton = ({ children }) => (
  <Button
    onClick={() => window.alert('hello world!')}
    iconLeft="whatshot"
    className={styles.customButton}
  >
    {children}
  </Button>
)

export default MainButton

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
}
