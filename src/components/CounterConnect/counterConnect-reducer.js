import produce from 'immer'

export const INITIAL_STATE = {
  counter: 0,
}

export default (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'INCREMENT':
        draft.counter += 1
        break
      case 'DECREMENT':
        draft.counter -= 1
        break
      case 'RESET':
        draft.counter = 0
        break
      default:
        return state
    }
  })
