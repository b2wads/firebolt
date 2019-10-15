import React, { useState } from 'react'
import { Button } from 'grimorio-ui'

function CounterNotConnect() {
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
      {counter}

      <div>
        <Button onClick={handleIncrement}>Aumentar valor</Button>
        <Button onClick={handleDecrement}>Diminuir valor</Button>
        <Button onClick={handleReset}>Zerar</Button>
      </div>
    </div>
  )
}

export default CounterNotConnect
