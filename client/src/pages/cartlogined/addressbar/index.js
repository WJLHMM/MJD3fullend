/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { addressbaruistyle } from '@/pages/cartlogined/addressbar/addressbarstyle';

const AddressBarUi = () => (
  <div
    className="addressbarui"
    css={addressbaruistyle}
  >
    <div className="address">
      <i className="iconfont icon-dingweiweizhi bgfont">&#xe713;</i>
      <span className="bgfont2">北京市朝阳区三环到四环</span>
    </div>
    <div className="editmyc">
      <i className="iconfont icon-anjianfengexian bgfont">&#xe680;</i>
      <span className="bgfont2">编辑商品</span>
    </div>
  </div>

);

export default AddressBarUi;
