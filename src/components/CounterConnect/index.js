import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'grimorio-ui'
import { increment, decrement, reset } from './counterConnect-action'

export function Counter({ counter, increment, decrement, reset }) {
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

export default connect(
  state => ({
    counter: state.totalCounter.counter
  }),
  {
    increment,
    decrement,
    reset
  }
)(Counter)
