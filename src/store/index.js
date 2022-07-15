import { createStore,combineReducers,applyMiddleware } from 'redux'
import { carReducer } from './reducers/carReducer'
import thunk from 'redux-thunk'
import { darkModeReducer } from './reducers/darkModeReducer'

const rootReducer= combineReducers({
    cars:carReducer,
    modeReducer:darkModeReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))