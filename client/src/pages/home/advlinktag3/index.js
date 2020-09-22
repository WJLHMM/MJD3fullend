/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

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

const AdvlinkTag3 = () => (
  <div
    css={advlinkstyle3}
  >
    <img alt="advpic3" src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/117072/7/12300/77560/5f0c4bf3E8e55bbea/b27192bb28e7323a.png.webp" />
  </div>
);

export default AdvlinkTag3;
