import { combineReducers } from 'redux'
import MovieReducer from './MovieReducer'

const rootReducer = combineReducers({
    movieReducer: MovieReducer
})
export default rootReducer