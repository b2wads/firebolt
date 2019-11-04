import React from 'react'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'
import MainButton from '~/components/button'

export default function Home() {
  return (
    <>
      <h1>Exemplos de componentes</h1>
      <CounterConnect />
      <CounterNotConnect />
      <h2>Componente com CSS Modules</h2>
      <MainButton>hello</MainButton>
    </>
  )
}
