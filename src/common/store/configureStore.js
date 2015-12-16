import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules'
import createLogger from 'redux-logger'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export const configureStore = initalState => {
  const store = createStoreWithMiddleware(rootReducer, initalState)

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore