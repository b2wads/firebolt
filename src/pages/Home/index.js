import React from 'react'
import { Button } from 'grimorio-ui'

function Home() {
  return (
    <Button onClick={() => window.alert('hello world!')} iconLeft="whatshot">
      hello
    </Button>
  )
}

export default Home
