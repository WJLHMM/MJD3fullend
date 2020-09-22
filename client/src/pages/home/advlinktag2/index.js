/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

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

const AdvlinkTag2 = () => (
  <div
    css={advlinkstyle2}
  >
    <img alt="advpic2" src="https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp" />
  </div>
);

export default AdvlinkTag2;
