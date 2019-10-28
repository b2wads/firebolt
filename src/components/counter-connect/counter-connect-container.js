import { connect } from 'react-redux'
import CounterConnect from './counter-connect-component'
import { increment, decrement, reset } from './counter-connect-actions'

export default connect(
  state => ({
    counter: state.totalCounter.counter,
  }),
  {
    increment,
    decrement,
    reset,
  }
)(CounterConnect)
