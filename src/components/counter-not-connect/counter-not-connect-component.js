import React, { useState } from 'react'
import { Button } from 'grimorio-ui'

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
    <div>
      <h1>Componente não conectado</h1>
      <div className="value">{counter}</div>
      <div>
        <Button className="increment-btn" onClick={handleIncrement}>
          Aumentar valor
        </Button>
        <Button className="decrement-btn" onClick={handleDecrement}>
          Diminuir valor
        </Button>
        <Button className="reset-btn" onClick={handleReset}>
          Zerar
        </Button>
      </div>
    </div>
  )
}
