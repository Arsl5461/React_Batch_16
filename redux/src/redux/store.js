import {applyMiddleware, createStore} from "redux"
import counterReducer from "./reducers/counter.reducer"
import thunk from "redux-thunk";


const store =createStore(counterReducer,applyMiddleware(thunk))

export default store;