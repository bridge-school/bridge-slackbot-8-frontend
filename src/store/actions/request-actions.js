import { actions } from '../constants'

const setChannels = channels => ({
  type: actions.SET_CHANNELS,
  payload: { channels }
})

const setSlackPostSuccess = pollId => ({
  type: actions.SET_POST_SUCCESS,
  payload: { pollId }
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
    .catch(error => console.log(error))

  // TODO: create an action handler for error handling and replace console log
}

export const createPoll = response => dispatch => {
  response()
    .then(res => res.json())
    .then(data => dispatch(setSlackPostSuccess(data.id)))
    .catch(error => console.log(error))
}
