/** @jsx jsx */

import React, { PureComponent } from 'react';
import { jsx, css } from '@emotion/core';

const sidebgstyle = css`
  background-image:linear-gradient(0deg,#f1503b,#c82519 50%);
  position:absolute;
  top:45px;
  left:-25%;
  height:7.25rem;
  width:150%;
  border-bottom-left-radius:100%;
  border-bottom-right-radius:100%;
  
`;

const SidebgTag = () => (
  <div
    id="sidebg"
    css={sidebgstyle}
  />
);

export default SidebgTag;
