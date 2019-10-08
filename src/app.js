import React, { Component } from 'react'
import { Button } from 'grimorio-ui'

export default class App extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick} iconLeft="whatshot">
        hello
      </Button>
    )
  }
}

App.defaultProps = {
  onClick: () => window.alert('hello world!'),
}
