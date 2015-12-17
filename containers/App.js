import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'
import { Logo } from '../components/index'
import { CompanyInfo, PersonalInfo, InstitutionInfo, Presentation } from './index'

const App = ({}) => <div>
  <CompanyInfo />
  <Presentation />
  <PersonalInfo />
  <InstitutionInfo />
</div>

export default App