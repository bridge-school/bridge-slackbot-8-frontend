import { actions } from '../constants'

const setChannels = channels => ({
  type: actions.SET_CHANNELS,
  payload: { channels }
})

const setErrors = errors => ({
  type: actions.SET_ERRORS,
  payload: { errors }
})

export const fetchChannels = response => dispatch => {
  response()
    .then(res => res.json())
    .then(data =>
      data
        // Sort according to channel name, in ascending order
        // Then add option values to each channel object
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(channel => ({ ...channel, option: `#${channel.name}` }))
    )
    .then(data => dispatch(setChannels(data)))
    .catch(error => dispatch(setErrors(error)))
}
