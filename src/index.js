import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// custom component provided by react-redux
// this allows everything within our component tree to get access using connect to our redux state
import { Provider } from 'react-redux'
// importing our created store
import store from './redux/store'

ReactDOM.render(
	// Provider takes just one prop called store which value will be store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
