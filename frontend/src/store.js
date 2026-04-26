import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import { product } from "./reducers"

const reducers = combineReducers({
    product
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))