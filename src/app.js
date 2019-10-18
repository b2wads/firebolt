<<<<<<< HEAD
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
=======
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
>>>>>>> fc00bdb18a2604199901853db936d94f530b0e8f
