import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function collectors(state=[], action) {
    return state
}

export default combineReducers({
    collectors: collectors,
    routing: routerReducer
});