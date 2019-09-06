// Constants usage: rather than checking for string action types,
// instead check for `actions.NAME_OF_ACTION_TYPE`
import { actions } from '../constants'

const formDataInitialState = []
const formDataReducer = (state = formDataInitialState, action) => {
  const { type } = action

  switch (type) {
    case actions.EXAMPLE_ACTION_TYPE:
    default:
      return state
  }
}

export default formDataReducer
