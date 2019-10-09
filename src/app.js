import React, { PureComponent } from 'react'
import { Button } from 'grimorio-ui'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Button
          onClick={() => window.alert('hello world!')}
          iconLeft="whatshot"
        >
          hello
        </Button>
      </>
    )
  }
}