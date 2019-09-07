import { actions } from '../constants'

const setChannels = channels => {
  console.log('debugging channels flow', channels)

  return {
    type: actions.SET_CHANNELS,
    payload: { channels }
  }
}

export const fetchChannels = channels => {
  setChannels(channels)
  return dispatch => dispatch(setChannels(channels))
}
