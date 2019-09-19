import { combineReducers } from 'redux'
import channelsReducer from './channels'
import errorsReducer from './errors'

const rootReducer = combineReducers({
  channelsReducer,
  errorsReducer
})

export default rootReducer
