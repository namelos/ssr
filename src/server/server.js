import path from 'path'
import express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config.dev'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import { fetchCounter } from '../common/api/counter'

const app = express()

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(handleRender)

const handleRender = (req, res) =>
  fetchCounter(apiResult => {
    const param = qs.parse(req, query)
    const counter = parseInt(params.counter, 10) || apiResult || 0

    const initialState = { counter }

    const store = configureStore(initialState)

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const finalState = store.getState()

    res.send(renderFullPage(html, finalState))
  })

const renderFullPage = (html, initialState) => `
  <html>
    <head>
      <title>universal</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
`

app.listen(3000, err =>
  err ?
    console.error(err) :
    console.log('listening at 3000...'))