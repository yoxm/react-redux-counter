
import { combineReducers } from "redux"
import CounterReducer from '../reducers/CounterReducer'

const rootReducer = combineReducers({
    CounterReducer: CounterReducer
})

export default rootReducer