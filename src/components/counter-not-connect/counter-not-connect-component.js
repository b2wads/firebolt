import React, { useState } from 'react'
import { Button } from '@b2wads/grimorio-ui'
import styles from './counter-not-connect.styl'

export default function CounterNotConnect() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter - 1)
  }

  function handleReset() {
    setCounter(0)
  }

  return (
    <div className={styles.connectNotComponent}>
      <span>
        Componente não conectado -
        <strong>
          Valor:<span className="value"> {counter}</span>
        </strong>
      </span>
      <div>
        <Button
          id="increment-btn"
          className={styles.actionButton}
          onClick={handleIncrement}
        >
          Aumentar valor
        </Button>
        <Button
          id="decrement-btn"
          onClick={handleDecrement}
          className={styles.actionButton}
        >
          Diminuir valor
        </Button>
        <Button
          id="reset-btn"
          onClick={handleReset}
          className={styles.actionButton}
        >
          Zerar
        </Button>
      </div>
    </div>
  )
}
