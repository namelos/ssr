import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { Logo } from '../components/index'

const CompanyInfo = ({}) => <div>
  <LeftPanel />
</div>

const LeftPanel = () => <div>
  <h3>左边</h3>
  <Logo />
  <br />
  <TextField floatingLabelText="项目名称" />
  <br />
  <TextField hintText="一句话简单介绍项目的亮点"
             floatingLabelText="项目亮点" />
  <br />
  <TextField floatingLabelText="所在城市" />
  <br />
  <TextField floatingLabelText="标签"
             hintText="3个标签" />
</div>

export default CompanyInfo
