/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayouH,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
  blackbg1,
  redjdbg1,
  fontColor1,

} from '@/statics/flexlayout';

export const divWrapstyle = css`
  width:100%;
  max-width:1080px;
  margin:0 auto;
  height:45px;
  font-size:14px;
  border:1px solid red;
  overflow:auto;
  ${flexlayout};
  ${flexlayoutAlignCenter};
`;

export const cancelButtonStyle = css`
  width:8%;
  height:100%;
  cursor:pointer;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter};  
  ${blackbg1};
  img {
    width:10px;
    height:10px;
  }
`;

export const jdiconStyle = css`
  width:10%;
  height:100%;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter};
  ${blackbg1};
   img {
    width:30px;
    height:30px;
  }
`;

export const appadtitleStyle = css`
  width:57%;
  height:100%;
  text-align:center;
  line-height:45px;
  ${blackbg1};
  ${fontColor1};
`;

export const appadtitle2Style = css`
  width:25%;
  height:100%;
  text-align:center;
  line-height:45px;
  ${redjdbg1};
  ${fontColor1};
`;
