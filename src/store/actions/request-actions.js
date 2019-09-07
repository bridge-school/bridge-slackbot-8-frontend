import { actions } from '../constants'

export const setChannels = channels => ({
  type: actions.SET_CHANNELS,
  payload: { channels }
})
