/** @jsx jsx */
import React, { useRef } from 'react';
import { jsx, css } from '@emotion/core';

// import styles from '@/pages/home/mcommontip/cancelbutton/style.scss'
import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
  blackbg1,
} from '@/statics/flexlayout';

const cancelButtonStyle = css`
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

const CancelButton = (props) => {
  const cancelbuttondom = useRef();
  return (
    <div
      css={cancelButtonStyle}
      ref={cancelbuttondom}
      onClick={
        () => {
          const homedom = document.getElementById('homewrap');
          const mcommontip = document.getElementById('m_common_tip');
          homedom.removeChild(mcommontip);
          const searchwrapdom = document.getElementById('searchwrap');
          searchwrapdom.style.position = 'fixed';
          searchwrapdom.style.top = 0;
          document.getElementById('sidebg').style.top = 0;
          document.cookie = `key=${escape('mcommontip')}`;
          window.location.reload();
        }
      }
    >
      <img src="https://m.360buyimg.com/mobilecms/jfs/t19480/10/1439571805/820/787bec2c/5ac9d730N04e6d766.png" />
    </div>
  );
};

export default CancelButton
