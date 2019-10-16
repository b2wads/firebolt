import React from 'react'
import CounterConnect from '../../components/CounterConnect'
import CounterNotConnect from '../../components/CounterNotConnect'

export default function Home() {
  return (
    <>
      <CounterConnect />
      <CounterNotConnect />
    </>
  )
}
