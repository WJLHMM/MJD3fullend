/* eslint-disable */
import React, { PureComponent } from 'react';
import Testfile from '@/publicui/testfold';

import {
  CancelButton,
  Jdicon,
  Appadtitle,
  Appadtitle2,
  DivWrap,
} from '@/pages/home/mcommontip/mcommontip';

const LazyMCommonTip = React.lazy(() => import('@/pages/home/mcommontip'))
const LazySearch = React.lazy(() => import('@/pages/home/search'))

class Test extends PureComponent {
  render() {
    return (
      <div>
        <Testfile />
        <DivWrap>
          <CancelButton />
          <Jdicon />
          <Appadtitle />
          <Appadtitle2 />
        </DivWrap>
        <LazySearch />
      </div>
    )
  }
}

export default Test;
