import React, { PureComponent, Fragment } from 'react';
import { jsx, css } from '@emotion/core'
import { withRouter } from 'react-router-dom';

const LazySearchHeaderUi = React.lazy(() => import(/* webpackChunkName:"searchheader" */'@/publicui/searchheader'))
const LazySortBarUi = React.lazy(() => import(/* webpackChunkName:"sortbar" */'@/publicui/sortbar'))
const LazySelectionUi = React.lazy(() => import(/* webpackChunkName:"productionitem" */'@/pages/productionlist/productionitem'))
const LazySortViewUi = React.lazy(() => import(/* webpackChunkName:"sortwview" */'@/publicui/sortview'))

@withRouter
class ProductionList extends PureComponent {
  render() {
    return (
      <>
        <LazySearchHeaderUi pathinfo={this.props.match} />
        <LazySortBarUi />
        <LazySortViewUi />
        <LazySelectionUi />

      </>
    );
  }
}

export default ProductionList;
