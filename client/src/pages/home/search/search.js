/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';

import {
  searchWrapstyle,
  categoriesMenustyle,
  loginbuttontyle,
  searchformstyle,

} from '@/pages/home/search/searchstyle';

export const SearchWrap = (props) => {
  useEffect(() => {
    const mcommontip = document.getElementById('m_common_tip');
    const searchwrapdom = document.getElementById('searchwrap');
    if (!mcommontip) {
      searchwrapdom.style.background = 'linear-gradient(0deg,#f1503b,#c82519 50%)';
      searchwrapdom.style.position = 'fixed';
      searchwrapdom.style.top = 0;
    }
    window.addEventListener('scroll', () => {
      const t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 50) {
        searchwrapdom.style.background = 'linear-gradient(0deg,#f1503b,#c82519 50%)';
        searchwrapdom.style.position = 'fixed';
        searchwrapdom.style.top = 0;
      } else if (t < 50 && !mcommontip) {
        searchwrapdom.style.background = 'linear-gradient(0deg,#f1503b,#c82519 50%)';
        searchwrapdom.style.position = 'fixed';
        searchwrapdom.style.top = 0;
      } else {
        searchwrapdom.style.position = 'absolute';
        searchwrapdom.style.top = '45px';
        searchwrapdom.style.background = 'linear-gradient(0deg,#f1503b,#c82519 10%)';
      }
    }, false);
  });

  return (
    <div
      id="searchwrap"
      css={searchWrapstyle}
      {...props}
    />
  );
};

export const CategoriesMenu = (props) => (
  <div
    css={categoriesMenustyle}
  >
    <i className="iconfont icon-caidan1">&#xe660;</i>
  </div>
);
export const LoginButton = (props) => (
  <div
    css={loginbuttontyle}
  >
    <span>登录</span>
  </div>
);

export const SearchForm = (props) => (
  <form
    css={searchformstyle}
  >
    <input type="text" placeholder="Apple Mac Air" />
    <div className="iconwrap">
      <i className="iconfont icon-jingdong">&#xe612;</i>
      <i className="iconfont icon-anjianfengexian">&#xe680;</i>
      <i className="iconfont icon-sousuo">&#xe627;</i>
    </div>
  </form>
);
