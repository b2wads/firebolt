import React from 'react'
import PropType from 'prop-types'
import { Button } from 'grimorio-ui'

export default function CounterConnect({
  counter,
  increment,
  decrement,
  reset,
}) {
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
