import React from 'react'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'

export default function Home() {
  return (
    <>
      <h1>Exemplos de componentes</h1>
      <CounterConnect />
      <CounterNotConnect />
    </>
  )
}
