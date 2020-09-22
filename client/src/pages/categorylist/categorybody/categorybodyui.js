/** @jsx jsx */

import React, {
  Fragment, useState, useEffect, useMemo, useRef,
} from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { List, Grid } from 'antd-mobile';
import LazyLoad from 'react-lazyload';

const { Item } = List;

const CategoryBodyUi = (props) => {
  let data
  const { cid } = props.match.params;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const [b, setB] = useState({});
  useEffect(() => {
    let isUnmount = false;
    const fetchData = async () => {
      const res = await axios.get('categorylist/categorybodyui')
      if (!isUnmount) {
        setB(res.data);
      }
    };
    fetchData();
    return () => { isUnmount = true }
  }, []);

  if (b[cid]) {
    data = b[cid].map((_val, i) => ({
      icon: _val[0],
      text: _val[1],
    }));
  } else {
    data = []
  }
  if (data.length === 0) {
     return  (
        <div style={{
           top:'300px',
           left:'140px',
           color:'red',
           position:'absolute',
           textAlign:'center',
           height:'40px',
           lineHeight:'20px',
          }}
        >
          除前三项,其他数据正在建设中，敬请期待
        </div>
    )
  }
  return (
    <Grid
      data={data}
      columnNum={3}
      hasLine={false}
      renderItem={(dataItem) => (
        <div
          id={dataItem.text}
          style={{ padding: '0px 2rem 0px 0px', width: '100%', height: '100%' }}
          onClick={() => {
            props.history.push(`/productionlist/${dataItem.text}`);
          }}
        >
          <img src={dataItem.icon} style={{ width: '60%', height: '56%' }} alt="" />
          <p style={{
            height: '40%', fontSize: '14px', textAlign: 'center', paddingTop: '10px', color: '#333',
          }}
          >
            {dataItem.text}
          </p>
        </div>
      )}
    />
  );
};

export default withRouter(CategoryBodyUi);
