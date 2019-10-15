import { combineReducers } from 'redux'

import CounterConnect from '../components/CounterConnect/reducer'

export default combineReducers({
  counter: CounterConnect
})
