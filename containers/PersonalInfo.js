import React, { Component } from 'react'
import { TextField, Toggle } from 'material-ui'
import { Logo } from '../components/index'

const CompanyInfo = ({}) => <div>
  <h3>项目发起人信息</h3>
  <LeftPanel />
  <RightPanel />
</div>

const LeftPanel = () => <div>
  <h3>左边</h3>
  <TextField hintText="姓名(必填)" />
  <br />
  <TextField hintText="手机号(必填)" />
  <br />
  <TextField hintText="邮箱(必填)"/>
  <br />
</div>

const RightPanel = () => <div>
  <h3>右边</h3>
  <TextField hintText="公司名字(必填)" />
  <br />
  <TextField hintText="联系地址(选填)" />
  <br />
  <TextField hintText="微信(选填)" />
  <br />
</div>

export default CompanyInfo
