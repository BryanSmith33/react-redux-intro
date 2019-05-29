// importing createStore and applyMiddleware from redux
// these are self descriptive in what they do
import { createStore, applyMiddleware } from 'redux'
// here we are using promiseMiddleware to handle our promises from axios
import promiseMiddleware from 'redux-promise-middleware'
// importing our userReducer to pass into the invocation of createStore
import userReducer from './userReducer'

// exporting our createStore so we can use it in our Provider inside of index.js
export default createStore(userReducer, applyMiddleware(promiseMiddleware))
