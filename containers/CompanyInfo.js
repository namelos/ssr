import React, { Component } from 'react'
import { TextField, Toggle } from 'material-ui'
import { Logo } from '../components/index'

const CompanyInfo = ({}) => <div>
  <LeftPanel />
  <RightPanel />
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

const RightPanel = () => <div>
  <h3>右边</h3>
  <br />
  融资目标<TextField hintText="(数字)" />
  <br />
  出让股份<TextField hintText="(必填)" />%
  您的项目估值 { 'xxx' } 万元
  <br />
  <Toggle name="exceed" label="是否超募" />
  <br />
  最高融资目标<TextField hintText="(数字)" />万元
  最高出让股份<TextField hintText="(数字)" />万元
  <br />
  起投金额<TextField hintText="(数字)" />万元
</div>

export default CompanyInfo
