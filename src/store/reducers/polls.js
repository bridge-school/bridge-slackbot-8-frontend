import { actions } from '../constants'

const pollsInitialState = { pollId: null }
const pollsReducer = (state = pollsInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_POST_SUCCESS:
      return { ...state, pollId: payload.pollId }
    default:
      return state
  }
}

export default pollsReducer
