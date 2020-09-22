/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackJustify,
  flexlayoutFlexStart,
  flexlayout1,
  flexlayoutPackAround,
  PageBgColor,

} from '@/statics/flexlayout';

export const categorybodywrapstyle = css`
  width:100%;
  height:100%;
  margin-top:44px;
  ${flexlayout};
  ${flexlayoutPackJustify};
  #mylist {
    overflow: hidden;
    width: 85px;
    height: 1794px;
    position: relative;
    background:  rgba(229,229,229,.4);
    .touchstop {
      touch-action:none;
    }
    ul {
      height:1794px;
      width:85px;
      .refresh{
          position:absolute;
          line-height:100px;
          bottom:100%;
          text-align:center;
          width:100%;
          background:  rgba(229,229,229,.4);
          height:100px;
      }
      .loadmore{
          height:20px;
          position:absolute;
          line-height:20px;
          top:100%;
          text-align:center;
          width:100%;
          background:  rgba(229,229,229,.4);
      }   
    }  
  }
`;
export const listyle = css`
  height: 46px;
  width: 100%;
  padding: 0;
  line-height: 46px;
  text-align: center;
  border-right: 1px solid rgba(246,246,246,1);
  font-size: 14px;
  a {
    display:block;
    height:46px;
    width:100%;
    color:#000;
  }
  .active {
    color:#ff5b05;
    background:#fff;
  }    
`;

export const categorylistwrapstyle = css`
  ${flexlayout};
  ${flexlayoutV};
  ${flexlayout1};
  ${flexlayoutFlexStart};  
  ${flexlayoutPackJustify};  
`;
export const categorylistheaderstyle = css`
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackJustify};  
  height:46px;
  width:100%;
  padding:0px 1rem;
  color:#000;
  h3 {
    font-size:14px;
    font-weight:bold;
  }
  .ranklist {
    .icon-paihangbang {
      color:red;
      font-size:14px;
    }
    span {
      font-size:14px;
      color:#848689;
    }
  }
`;
