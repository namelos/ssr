import React, { Component } from 'react'
import { TextField, Toggle } from 'material-ui'
import { Logo } from '../components/index'

const InstitutionInfo = ({}) => <div>
  <h3>机构信息</h3>
  <LeftPanel />
  <RightPanel />
</div>

const LeftPanel = () => <div>
  <h3>左边</h3>
  <br />
  <Toggle label="是否已有线下投资机构" />
  <br />
  <Logo height="50" width="50" />
  <TextField floatingLabelText="领投机构名字" />
</div>

const RightPanel = () => <div>
  <h3>右边</h3>
  <br />
  <Toggle label="是否有机构邀请码" />
  <br />
  <TextField floatingLabelText="邀请码" />
</div>

export default InstitutionInfo
