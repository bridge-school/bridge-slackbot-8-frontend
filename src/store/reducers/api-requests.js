import { actions } from '../constants'

const requestInitialState = { channels: [], isLoading: true }
const requestsReducer = (state = requestInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_CHANNELS:
      return {
        ...state,
        channels: payload.channels,
        isLoading: payload.isLoading
      }
    default:
      return state
  }
}

export default requestsReducer
