import { actions } from '../constants'

const requestInitialState = { channels: [] }
const requestsReducer = (state = requestInitialState, action) => {
  const { type, payload } = action

  console.log('debugging action flow', action)

  switch (type) {
    case actions.SET_CHANNELS:
      console.log('hit set channels action')
      return { ...state, channels: payload.channels }
    default:
      console.log('hit default')
      return state
  }
}

export default requestsReducer
