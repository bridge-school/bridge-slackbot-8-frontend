import { actions } from '../constants'

const setChannels = channels => ({
  type: actions.SET_CHANNELS,
  payload: { channels }
})

export const fetchChannels = channels => dispatch => {
  dispatch(setChannels(channels))
}
