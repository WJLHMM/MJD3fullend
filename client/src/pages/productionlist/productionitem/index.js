/** @jsx jsx */

import React, { Component, PropTypes } from 'react';
import { withRouter } from "react-router-dom";
import { jsx, css } from '@emotion/core'

import SelectionItem from '@/pages/productionlist/productionitem/productionitem';

@withRouter
class SelectionUi extends Component {
  render() {
    return (
      <div
        className="itemcontentwrap"
        css={css`
            width:100%;
            max-width:1080px;
            margin:0 auto;
        `}
      >
        <SelectionItem />
      </div>
    );
  }
}

export default SelectionUi
