import React, { Component } from 'react'
import { Paper } from 'material-ui'

const Logo = ({ height = 100, width = 100}) =>
  <Paper style={{ height: `${height}px`, width: `${width}px` }} />

export default Logo