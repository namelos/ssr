import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App'

import rootReducer from './modules'
import createLogger from 'redux-logger'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

const store = createStoreWithMiddleware(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)