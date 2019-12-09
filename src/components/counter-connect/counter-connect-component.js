import React from 'react'
import PropType from 'prop-types'
import { Button } from '@b2wads/grimorio-ui'
import styles from './counter-connect.styl'

export default function CounterConnect({
  counter,
  increment,
  decrement,
  reset,
}) {
  return (
    <div className={styles.connectComponent}>
      <div>
        <span className={styles.title}>
          Componente conectado - <strong>Valor: {counter}</strong>
        </span>
      </div>
      <div>
        <Button onClick={increment} className={styles.actionButton}>
          Aumentar valor
        </Button>
        <Button onClick={decrement} className={styles.actionButton}>
          Diminuir valor
        </Button>
        <Button onClick={reset} className={styles.actionButton}>
          Zerar
        </Button>
      </div>
    </div>
  )
}

CounterConnect.defaultProps = {
  counter: 0,
  increment: {},
  decrement: {},
  reset: {},
}

CounterConnect.propTypes = {
  counter: PropType.number,
  increment: PropType.oneOfType([PropType.func, PropType.object]),
  decrement: PropType.oneOfType([PropType.func, PropType.object]),
  reset: PropType.oneOfType([PropType.func, PropType.object]),
}
