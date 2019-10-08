import React, { Component } from 'react'
import { Button } from 'grimorio-ui'

export default class App extends Component {
  render() {
    return (
      <Button onClick={() => alert('gogogo fronteee')} iconLeft="whatshot">
        hello
      </Button>
    )
  }
}