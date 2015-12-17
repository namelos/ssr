import path from 'path'
import express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config.dev'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import App from './containers/App'

const app = express()

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err =>
  err ?
    console.error(err) :
    console.log('listening at 3000...'))