import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App'
import reducers from './redux/reducers/index'

// Set up Redux and Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunk) ))

const jsx = (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))