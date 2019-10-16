import { combineReducers } from 'redux'

import CounterConnect from '../components/CounterConnect/counterConnect-reducer'

export default combineReducers({
  totalCounter: CounterConnect
})
