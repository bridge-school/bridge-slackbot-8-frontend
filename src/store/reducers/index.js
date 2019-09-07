import { combineReducers } from 'redux'
import requestsReducer from './api-requests'
import formDataReducer from './form-data'

const rootReducer = combineReducers({
  requestsReducer,
  formDataReducer
})

export default rootReducer
