import { combineReducers } from 'redux'
import channelsReducer from './channels'
import pollsReducer from './polls'

const rootReducer = combineReducers({
  channelsReducer,
  pollsReducer
})

export default rootReducer
