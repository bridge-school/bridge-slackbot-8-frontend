import { actions } from '../constants'

const errorsInitialState = { errors: null }
const errorsReducer = (state = errorsInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_ERRORS:
      return { ...state, errors: payload.errors }
    default:
      return state
  }
}

export default errorsReducer
