import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import appDuck, {bootAction} from "./ducks/appDuck";


const rootReducer = combineReducers({
    appDuck: appDuck,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default () => {
    bootAction()(store.dispatch)
    return store
}