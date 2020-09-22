/** @jsx jsx */
import React from 'react';
import { withRouter } from "react-router-dom";
import { jsx } from '@emotion/core'
import { InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

import {
  inputformwrapstyle,
} from '@/pages/login/logininputui/logininputuistyle'

@withRouter
class LoginInputUi extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error) => {
      if (!error) {
        Toast.success('你已经成功验证输入');
      } else if (error.userName) {
        Toast.fail(`${error.userName.errors[0].message}`);
      } else {
        Toast.fail(`${error.password.errors[0].message}`);
      }
    })
  }

  onChange = (e) => {
  }

  handleClick = () => {
    this.inputRef.focus();
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    return (
      <div className="inputformwrap" css={inputformwrapstyle}>
        <form action="">
          <div className="dialcodepicker">
            <span>+086</span>
            <i className="iconfont icon-xiabiao">&#xe64b;</i>
          </div>
          {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    { required: true, message: '请输入手机号码' },
                    { min: 11, max: 11, message: '手机号码为11位' },
                    { pattern: new RegExp('^\\d+$', 'g'), message: '用户名必须为手机数字' },
                  ],
                })(
                  <InputItem
                    className="input1"
                    type="phone"
                    clear
                    placeholder="请输入手机号码"
                    onChange={() => {}}
                  />,
                )
              }

          {

            <div style={{ color: 'red', fontSize: '12px' }}>
              { (getFieldError('userName') || [])[0] }
            </div>

              }
        </form>
        <form action="">
          {
            getFieldDecorator('password', {
              initialValue: '',
              rules: [
                { required: true, message: '请输入密码' },
                { min: 6, max: 12, message: '密码长度在6~12字符内' },
                { pattern: new RegExp('^\\d+$', 'g'), message: '密码名必须为数字' },
              ],
            })(<InputItem
              className="input2"
              clear
              maxLength={6}
              placeholder="请输入收到的验证码"
            />)

            }
          <div style={{ color: 'red', fontSize: '12px' }}>
            { (getFieldError('password') || [])[0] }
          </div>
          <i className="iconfont icon-anjianfengexian">&#xe680;</i>
          <div className="vcode">获取验证码</div>
        </form>
        <div className="btnwrap">
          <button type="submit" className="btnlog" onClick={this.handleSubmit}>登录</button>
          <button type="submit" className="btnoncelog">一键登录</button>
        </div>
        <div className="logmeth">
          <p onClick={() => (this.props.history.push('login'))}>账号密码登录</p>
          <p>手机快速注册</p>
        </div>
        <div className="otherways">
          <h4>其他登录方式</h4>
          <div className="otherwayslink">
            <div className="icontitle">
              <i className="iconfont icon-QQ">&#xe63c;</i>
              <p>QQ</p>
            </div>
            <div className="icontitle">
              <i className="iconfont icon-weixin">&#xe603;</i>
              <p>微信</p>
            </div>
          </div>
        </div>
        <div className="policy">
          <span>未注册的手机号验证后将自动创建京东账号,登录即代表您已 </span>
          <span>
            同意
            <a>隐私政策</a>
          </span>
        </div>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default createForm()(LoginInputUi)
