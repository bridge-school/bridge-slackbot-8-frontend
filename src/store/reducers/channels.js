import { actions } from '../constants'

const channelsInitialState = { channels: [], isLoading: true }
const channelsReducer = (state = channelsInitialState, action) => {
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

export default channelsReducer
