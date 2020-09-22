import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

const RecommendadvUi = (props) => {
  const [a1, setA1] = useState([]);
  let data1;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/home/recommendadv')
      setA1(res.data);
    };
    fetchData();
  }, []);
  const data = a1.map((_val) => ({
     icon: _val[0],
     text: _val[1],
     text2: _val[2],
  }));

  return (
    <div className="recommendadvwrap">
      <Card>
        <Card.Header
          title={(
            <div className="titlewrap" style={{ width: '100%', height: '2.4rem' }}>
              <img alt="uploadpics" style={{ width: '100%', height: '100%' }} src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" />
            </div>
          )}
        />
        <Card.Body>
          <Grid
            data={data}
            columnNum={2}
            hasLine={false}
            renderItem={(dataItem) => (
              <div id="recomitem" style={{ padding: '0px', width: '100%' }}>
                <LazyLoad
                  height={props.clientHeight}
                  offset={100}
                >
                  <img src={dataItem.icon} style={{ width: '100%', height: '11.22rem' }} alt="" />
                </LazyLoad>
                <div id="recotext" style={{ color: '#888', width: '100%', height: '3.5rem' }}>
                  <p className="recotext1">
                    <img alt="showpics" src="//img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png" />
                    {dataItem.text}

                  </p>
                  <p style={{ color: '#f23030', height: '40%', textAlign: 'left' }}>
                    <span>￥</span>
                    <em style={{ fontSize: '18px', fontFamily: 'JDZhengHT-EN-Regular' }}>{dataItem.text2}</em>
                  </p>
                </div>
              </div>
            )}
          />

        </Card.Body>
      </Card>
    </div>
  );
}

export default RecommendadvUi;
