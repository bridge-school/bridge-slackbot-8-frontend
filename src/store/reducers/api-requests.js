import { actions } from '../constants'

const requestInitialState = []
const requestsReducer = (state = requestInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_CHANNELS:
      return { ...state, channels: payload }
    default:
      return state
  }
}

export default requestsReducer
