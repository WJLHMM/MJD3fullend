/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React, { Component, Fragment, Suspense } from 'react';
import { withRouter } from 'react-router-dom'

const LazyHeaderUi = React.lazy(() => import(/* webpackChunkName:"header" */'@/publicui/header'))
const LazyLoginTips = React.lazy(() => import(/* webpackChunkName:"logintip" */'@/pages/cartunlogin/logintip'))
const LazySecondkillUi = React.lazy(() => import(/* webpackChunkName:"secondkill" */'@/pages/home/secondkill'))
const LazyRecommendadvUi = React.lazy(() => import(/* webpackChunkName:"recommendadv" */'@/pages/home/recommendadv'))
const LazyTabBarUi = React.lazy(() => import(/* webpackChunkName:"footer" */'@/publicui/footer'))

@withRouter
class Cartunlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="cartunloginwrap"
        css={css`
          width:100%;
          max-width:1080px;
          position:relative;
          margin:0 auto;

        `}
      >
        <LazyHeaderUi />
        <LazyLoginTips />
        <LazySecondkillUi />
        <LazyRecommendadvUi />
        <LazyTabBarUi />
      </div>
    );
  }
}

export default Cartunlogin;
