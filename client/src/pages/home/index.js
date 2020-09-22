/** @jsx jsx */
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { PageBgColor } from '@/statics/flexlayout';
import CancelButton from '@/pages/home/mcommontip/cancelbutton'

const LazyMCommonTip = React.lazy(() => import(/* webpackChunkName:"mcommontip" */'@/pages/home/mcommontip'))
const LazySearch = React.lazy(() => import(/* webpackChunkName:"search" */'@/pages/home/search'))
const LazySidebgTag = React.lazy(() => import(/* webpackChunkName:"sidebg" */'@/pages/home/sidebg'))
const LazyTabBarUi = React.lazy(() => import(/* webpackChunkName:"footer" */'@/publicui/footer'))
const LazyCarouselUi = React.lazy(() => import(/* webpackChunkName:"carousel" */'@/pages/home/carousel'))
const LazyGridUi = React.lazy(() => import(/* webpackChunkName:"gridui" */'@/pages/home/gridui'))
const LazySecondkillUi = React.lazy(() => import(/* webpackChunkName:"secondkill" */'@/pages/home/secondkill'))
const LazyAdvlinkTag = React.lazy(() => import(/* webpackChunkName:"advlinktag1" */'@/pages/home/advlinktag1'))
const LazyAdvlinkTag2 = React.lazy(() => import(/* webpackChunkName:"advlinktag2" */'@/pages/home/advlinktag2'))
const LazyAdvlinkTag3 = React.lazy(() => import(/* webpackChunkName:"advlinktag3" */'@/pages/home/advlinktag3'))
const LazyDjxyadvUi = React.lazy(() => import(/* webpackChunkName:"djxyadv" */'@/pages/home/djxyadv'))
const LazyDailyshopUi = React.lazy(() => import(/* webpackChunkName:"dailyshop" */'@/pages/home/dailyshop'))
const LazyRecommendadvUi = React.lazy(() => import(/* webpackChunkName:"recommendadv" */'@/pages/home/recommendadv'))

@withRouter
class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
    }
  }

  render() {
    return (
      <div
        id="homewrap"
        css={css`
					width:100%;
					max-width:1080px;
			        color:#666;
					height:auto;
					position:relative;
					margin:0 auto;
					overflow:hidden;
					backgroundColor:${PageBgColor}
			  `}
      >
        <LazyMCommonTip />
        <LazySidebgTag />
        <LazySearch />
        <LazyCarouselUi />
        <LazyGridUi />
        <LazySecondkillUi />
        <LazyAdvlinkTag />
        <LazyAdvlinkTag2 />
        <LazyAdvlinkTag3 />
        <LazyDjxyadvUi />
        <LazyDailyshopUi />
        <LazyRecommendadvUi clientHeight={this.state.clientHeight} />
        <LazyTabBarUi />
      </div>
    )
  }
}

export default Home
