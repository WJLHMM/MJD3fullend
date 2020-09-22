/** @jsx jsx */

import React, { PureComponent } from 'react';
import { jsx, css } from '@emotion/core';

import {
  SearchWrap,
  CategoriesMenu,
  LoginButton,
  SearchForm,

} from '@/pages/home/search/search';

class Search extends PureComponent {
  render() {
    return (
      <SearchWrap>
        <CategoriesMenu />
        <SearchForm />
        <LoginButton />
      </SearchWrap>

    );
  }
}

export default Search;
