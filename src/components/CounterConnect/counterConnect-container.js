import { connect } from 'react-redux'
import Counter from './counterConnect-component'
import { increment, decrement, reset } from './counterConnect-action'

export default connect(
  state => ({
    counter: state.totalCounter.counter
  }),
  {
    increment,
    decrement,
    reset
  }
)(Counter)
