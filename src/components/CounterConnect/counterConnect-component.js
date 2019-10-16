import React from 'react'
import { Button } from 'grimorio-ui'

export default function Counter({ counter, increment, decrement, reset }) {
  return (
    <div>
      <h1>Componente conectado</h1>
      <div>{counter}</div>
      <Button onClick={increment}>Aumentar valor</Button>
      <Button onClick={decrement}>Diminuir valor</Button>
      <Button onClick={reset}>Zerar</Button>
    </div>
  )
}
