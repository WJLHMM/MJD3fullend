/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { jsx, css } from '@emotion/core';
import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import  { productionitemwrapstyle } from '@/pages/productionlist/productionitem/productionitemstyle';

import SplitLineUi from '@/publicui/splitline';
import LoadingshowUi from '@/publicui/loadingshow';

const SelectionItem = (props) => {
  const [data, setData] = useState([]);
  const key = props.match.params.productcategory;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  useEffect(() => {
    let isUnmount = false;
    const fetchData = async () => {
      const res = await axios.get('productionlist/productionitem')
      if (!isUnmount && key) {
        const temp = res.data.filter((item) => Object.keys(item)[0] === key)
        // console.log('tem', temp)
        if (temp.length !== 0) {
            setData(temp[0][key]);
        } else {
            setData([])
        }
      }
    };
    fetchData();
    return () => { isUnmount = true }
  }, [])
  // console.log('data', data)
  return (
    <>
      {
            data.length !== 0 ? data.map((item) => (
              <div
                key={Math.random()}
                onClick={() => {
                  props.history.push(`/productioninfo/${key}/${item[6]}`);
                  // window.location.reload()
                }}
              >
                <div
                  className="selectionitemwrap"
                  css={productionitemwrapstyle}
                >
                  <div className="imgshow">
                    <LazyLoad
                      height={clientHeight}
                      offset={100}
                    >
                      <img className="productionshow" src={item[0]} alt={`${item[6]}`} />
                    </LazyLoad>
                  </div>
                  <div className="content">
                    <div className="name">{item[1]}</div>
                    <div className="skuinfo">
                      <span className="skuinfodetail">6G运行</span>
                      <span className="service">128G</span>
                    </div>
                    <div className="priceinfo">
                      <span>
                        ¥
                        <em>{item[5]}</em>
                        .00
                      </span>
                    </div>
                    <div className="appraiseinfo">
                      <img className="imglogo" alt="sellerlogo" src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png" />
                      <span>{item[2]}</span>
                      条评价
                      <span>好评率</span>
                      <span>{item[3]}</span>
                    </div>
                    <div className="shopname">
                      {item[4]}
                    </div>
                  </div>
                </div>
                <SplitLineUi />
              </div>
            )) : (
              <div style={{
                margin: '200px auto', color: 'red', fontSize: '20px', textAlign: 'center',
              }}
              >
                数据加载中.....,敬请期待！
              </div>
            )
        }
    </>
  )
}

export default withRouter(SelectionItem);
