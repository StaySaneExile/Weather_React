import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";





const rootReducer = combineReducers({
  appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))