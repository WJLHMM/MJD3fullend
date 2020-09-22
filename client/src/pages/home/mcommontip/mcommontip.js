/** @jsx jsx */
import React, { useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/core';

import {
  divWrapstyle,
  cancelButtonStyle,
  jdiconStyle,
  appadtitleStyle,
  appadtitle2Style,
} from '@/pages/home/mcommontip/mcommontipstyle';

export const DivWrap = (props) => {
  useEffect(() => {
    const homedom = document.getElementById('homewrap');
    const mcommontip = document.getElementById('m_common_tip');
    if (mcommontip && document.cookie == 'key=mcommontip') {
      homedom.removeChild(mcommontip);
    }
  });

  return (
    <div
      id="m_common_tip"
      css={divWrapstyle}
      {...props}
    />
  )
}

export const CancelButton = (props) => {
  const cancelbuttondom = useRef();
  console.log('cancelButton', cancelbuttondom)
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
      <img alt="cancalicon" src="https://m.360buyimg.com/mobilecms/jfs/t19480/10/1439571805/820/787bec2c/5ac9d730N04e6d766.png" />
    </div>
  );
};

export const Jdicon = (props) => (
  <div
    css={jdiconStyle}
  >
    <img alt="jdapplogo" src="https://img11.360buyimg.com/jdphoto/s80x80_jfs/t27847/91/107794072/6854/14716732/5b850ecaN644d2983.png" />
  </div>
);

export const Appadtitle = (props) => (
  <p
    css={appadtitleStyle}
  >
    打开京东App，购物更轻松
  </p>
);

export const Appadtitle2 = (props) => (
  <p
    css={appadtitle2Style}
  >
    立即打开
  </p>
);
