/** @jsx jsx */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { jsx } from '@emotion/core';

import { logintipstyle } from '@/pages/cartunlogin/logintip/logintipstyle';

const LoginTips = (props) => (
  <div
    className="logtips"
    css={logintipstyle}
  >
    <div className="smallui">
      <span>登录后可以同步购物车中的商品</span>
      <button type="submit" onClick={() => (props.history.push('login'))}>登录</button>
    </div>
    <div className="bigui">
      <img alt="biguipic" src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" />
      <p>登录后可以同步购物车中的商品</p>
    </div>
    <div className="sksplitline">
      <h4 className="title">京东秒杀</h4>
    </div>
  </div>

);

export default withRouter(LoginTips);
