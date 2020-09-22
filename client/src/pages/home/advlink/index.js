/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
} from '@/statics/flexlayout';

const AdvlinkTag = (props) => (
  <div
    css={advlinkstyle}
  >
    <img src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg" />
    <img src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" />
  </div>
);

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

const AdvlinkTag2 = (props) => (
  <div
    css={advlinkstyle2}
  >
    <img src="https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp" />
  </div>
);

const advlinkstyle2 = css`
  width:100%;
  height:3rem;
  margin-top:0.3rem;
  img {
    display:block;
    width:100%;
    height:100%;
    border-radius:4px;
  }
`;
const AdvlinkTag3 = (props) => (
  <div
    css={advlinkstyle3}
  >
    <img src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/117072/7/12300/77560/5f0c4bf3E8e55bbea/b27192bb28e7323a.png.webp" />
  </div>
);

const advlinkstyle3 = css`
  width:100%;
  height:6rem;
  margin-top:0.3rem;
  img {
    display:block;
    width:100%;
    height:100%;
    border-radius:4px;
  }
`;
const Tags = {
  AdvlinkTag,
  AdvlinkTag2,
  AdvlinkTag3,
};
export default Tags;
