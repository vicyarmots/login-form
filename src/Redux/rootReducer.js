import { combineReducers } from 'redux'
import loggedReducer from './user/reducer'

const allReducers = combineReducers({ isLogged: loggedReducer })

export default allReducers
