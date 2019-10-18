import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import '../node_modules/grimorio-ui/dist/grimorio-ui.min.css'

ReactDOM.hydrate(<App />, document.getElementById('main'))
