/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
} from '@/statics/flexlayout';

const advlinkstyle = css`
  width:100%;
  height:7.8rem;
  margin-top:0.3rem;
  border-radius:4px;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackCenter};
  img {
    display:block;
    width:46%;
    height:100%;
  }
`;

const AdvlinkTag = () => (
  <div
    css={advlinkstyle}
  >
    <img alt="advpics" src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg" />
    <img alt="advpics" src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" />
  </div>
);

export default AdvlinkTag;
