import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import CSSModules from 'react-css-modules'
import styles from './Counter.css'

const Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => <div styleName='red'>
  Clicked: {counter} times
  {' '}
  <RaisedButton onClick={increment} label="+" />
  {' '}
  <RaisedButton onClick={decrement} label="-" />
  {' '}
  <RaisedButton onClick={incrementIfOdd} label="inc if odd" />
  {' '}
  <RaisedButton onClick={() => incrementAsync()} label="async increment" />
</div>

export default CSSModules(Counter, styles)