import React from 'react'
import CounterConnect from '../../components/CounterConnect'
import CounterNotConnect from '../../components/CounterNotConnect'

function Home() {
  return (
    <>
      <CounterConnect />
      <CounterNotConnect />
    </>
  )
}

export default Home
