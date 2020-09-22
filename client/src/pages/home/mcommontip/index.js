/** @jsx jsx */
import React, { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import CancelButton from '@/pages/home/mcommontip/cancelbutton'

import {
  DivWrap,
  Jdicon,
  Appadtitle,
  Appadtitle2,
} from '@/pages/home/mcommontip/mcommontip';

class MCommonTip extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <DivWrap>
        <CancelButton />
        <Jdicon />
        <Appadtitle />
        <Appadtitle2 />
      </DivWrap>

    );
  }
}

export default MCommonTip;
