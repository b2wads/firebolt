import React from 'react'
import CounterNotConnect from '~/components/counter-not-connect'
import CounterConnect from '~/components/counter-connect'

export default function Home() {
  return (
    <>
      <CounterConnect />
      <CounterNotConnect />
    </>
  )
}
