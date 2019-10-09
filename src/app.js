import React, { Component } from 'react'
import { Button } from 'grimorio-ui'

export default class App extends Component {
  render() {
    return (
      <Button onClick={() => window.alert('hello world!')} iconLeft="whatshot">
        hello
      </Button>
    )
  }
}