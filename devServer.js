const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const redux = require('redux')
const reactRedux = require('react-redux')

const createStore = redux.createStore
const Provider = reactRedux.createStore

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err =>
  err ?
    console.log(err)
    :console.log('listening at 3000...'))
