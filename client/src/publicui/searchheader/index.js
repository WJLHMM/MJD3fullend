/** @jsx jsx */

import  { useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/core';
import { Icon, SearchBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackAround,
  PageBgColor,

} from '@/statics/flexlayout';

const headerUistyle = css`
  width:100%;
  max-width:1080px;
  heigth:44px;
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackAround};
  background:#fff;
  position:fixed;
  z-index:100;
  border-bottom:1px solid ${PageBgColor};
  top:0;
  left:0;
`;

const SearchHeaderUi = (props) => {
  const { path } = props.match;
  const searchbardom = useRef();

  useEffect(() => {
    if (path.indexOf('productionlist') === 1) {
      searchbardom.current.style.position = 'relative';
      searchbardom.current.style.margin = '0px auto';
    }
  });

  return (
    <div
      className="headeruiwrap"
      css={headerUistyle}
      ref={searchbardom}
    >
      <Icon
        type="left"
        size="sm"
        onClick={() => (props.history.goBack())}
      />
      <SearchBar
        placeholder="手表"
        maxLength={8}
              // onSubmit={value => console.log(value, 'onSubmit')}
              // onClear={value => console.log(value, 'onClear')}
              // onFocus={() => console.log('onFocus')}
              // onBlur={() => console.log('onBlur')}
              // onCancel={() => console.log('onCancel')}
              // showCancelButton
        cancelText="搜索"
      />
    </div>
  );
};

export default withRouter(SearchHeaderUi);
