/** @jsx jsx */

import React, { PureComponent } from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
  flexlayoutPackJustify,
  flexlayoutFlexStart,

} from '@/statics/flexlayout';

export const searchWrapstyle = css`
  
  width:100%;
  max-width:1080px;
  height:44px;
  position:absolute;
  top:45px;
  z-index:100;
  background:rgba(0,0,0,0.2);
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackJustify};
`;
export const categoriesMenustyle = css`
  width:10%;
  height:100%;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter}; 
  padding-left:8px;
  .icon-caidan1 {
    color:rgba(255,255,255,1);
    font-size:20px;
    display:block;
  } 
`;
export const loginbuttontyle = css`
  width:10%;
  height:100%;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter}; 
  padding-right:8px;
  span {
    color:rgba(255,255,255,1);
    font-size:14px;
    display:block;
  } 
`;

export const searchformstyle = css`
  width:80%;
  height:44px;
  position:relative;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter}; 
  input {
    width:100%;
    border:none;
    border-radius:30px;
    padding-left:100px;
    height:30px;
    line-height:30px;
    font-size:12px;
  }
  input:-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#666;
    font-size: 12px;
    height:30px;
    line-height:30px;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #666;
    font-size: 12px;
    height:30px;
    line-height:30px;
  }
  input:-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #666;
    font-size: 12px;
    height:30px;
    line-height:30px;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #666;
    font-size: 12px;
    height:30px;
    line-height:30px;
  }
  .iconwrap {
    position:absolute;
    height:30px;
    width:150px;
    top:8px;
    left:3%;
    ${flexlayout};
    ${flexlayoutAlignCenter};
    ${flexlayoutFlexStart};
    .icon-jingdong{
      display:block;
      color:#c82519;
    }
    .icon-anjianfengexian{
      color:#666;
      display:block;
      font-size:16px;
    }
    .icon-sousuo{
      color:#666;
      display:block;
      font-size:18px;
    }
  }
`;
