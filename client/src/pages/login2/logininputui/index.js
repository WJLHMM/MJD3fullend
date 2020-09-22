/** @jsx jsx */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { jsx } from '@emotion/core'
import { InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

import {
  inputformwrapstyle,
} from '@/pages/login2/logininputui/logininputuistyle'

import { actionCreators } from '@/pages/login2/store';
import { initusernamecartlistaction } from '@/pages/productioninfo/store/actioncreators';

const databaselogininfo = [
  { username: 'admin', password: 'admin' },
  { username: 'guest', password: 'guest' },
]

@withRouter
class LoginInputUi extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      const { username, password } = values
      // console.log(this.props)
      if (!error) {
        const flag = databaselogininfo.some((item) => item.username == username && item.password == password)
        if (flag) {
          this.props.dispatch(actionCreators.userinfosubmitaction(values.username, values.password, true))
          /* below dispath to initatial a usename:[] in store for the first time*/
          this.props.dispatch(initusernamecartlistaction(values.username))
          Toast.success(`${username}您已经成功登录`, 0.9);
          setTimeout(() => { this.props.history.push(`/myinfo/${username}`) }, 800)
        } else {
          Toast.fail('您所输入的账号或者密码错误');
        }
      } else if (error.username) {
        Toast.fail(`${error.username.errors[0].message}`);
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
        <form>
          {
            getFieldDecorator('username', {
              initialValue: '',
              rules: [
                { required: true, message: '请输入用户名' },
                { min: 1, max: 12, message: '用户名长度在1~12字符内' },
                { pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为字母或者数字' },
              ],
            })(
              <InputItem
                className="input1"
                clear
                placeholder="用户名/邮箱/手机"
              />,
            )
          }

          {

            <div style={{ color: 'red', fontSize: '12px' }}>
              { (getFieldError('username') || [])[0] }
            </div>

          }
        </form>
        <form action="">
          {
            getFieldDecorator('password', {
              initialValue: '',
              rules: [
                { required: true, message: '请输入密码' },
                { min: 5, max: 12, message: '密码长度在6~12字符内' },
                { pattern: new RegExp('^\\w+$', 'g'), message: '密码名必须为字母或数字' },
              ],
            })(
              <InputItem
                className="input2"
                type="password"
                clear
                maxLength={6}
                placeholder="请输入收到的验证码"
              />,
            )
          }
          <div style={{ color: 'red', fontSize: '12px' }}>
            { (getFieldError('password') || [])[0] }
          </div>
          <i className="iconfont icon-xiabiao">&#xe64b;</i>
          <i className="iconfont icon-anjianfengexian">&#xe680;</i>
          <div className="vcode">忘记密码</div>
        </form>
        <div className="btnwrap">
          <button
            type="submit"
            className="btnlog"
            onClick={this.handleSubmit}
          >
            登录
          </button>
          <button type="submit" className="btnoncelog">一键登录</button>
        </div>
        <div className="logmeth">
          <p onClick={() => (this.props.history.push('login2'))}>手机验证码登录</p>
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
            <a href="#">隐私政策</a>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.login2.get('username'),
  password: state.login2.get('password'),
  islogined: state.login2.get('islogined'),
})

export default connect(mapStateToProps, null)(createForm()(LoginInputUi))
