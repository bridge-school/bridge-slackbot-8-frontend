import { combineReducers } from 'redux'
import channelsReducer from './channels'
import formDataReducer from './form-data'

const rootReducer = combineReducers({
  channelsReducer,
  formDataReducer
})

export default rootReducer
