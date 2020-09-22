/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import {
  categorylistheaderstyle,
} from '@/pages/categorylist/categorybody/categorybodystyle';

const CategoryListHeader = (props) => {
  let title;
  const [a, setA] = useState([]);
  const cid  = props.location.pathname.split('/')[2]
  const titlearray = a.filter((item) => (item[1] === cid))
  useEffect(() => {
    let isUnmount = false;
    const fetchData = async () => {
      const res = await axios.get('categorylist/categorylistnavui')
      if (!isUnmount) {
        setA(res.data);
      }
    };
    fetchData();
    return () => { isUnmount = true }
  }, [])
  if (titlearray[0]) {
    [[title]] = titlearray
  } else {
    title = '热门推荐'
  }
  return (
    <div
      className="categorylistheader"
      css={categorylistheaderstyle}
    >
      <h3>{title}</h3>
      <div className="ranklist">
        <i className="iconfont icon-paihangbang">&#xe707;</i>
        <span>排行榜</span>
        <i className="iconfont icon-arrow-right">&#xe601;</i>
      </div>
    </div>
  )
}
export default withRouter(CategoryListHeader)
