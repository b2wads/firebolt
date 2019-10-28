import { combineReducers } from 'redux'

import CounterConnect from '../components/counter-connect/counter-connect-reducer'

export default combineReducers({
  totalCounter: CounterConnect,
})
