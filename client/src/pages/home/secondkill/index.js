import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'antd-mobile';
import axios from 'axios'

import CountDownUi from '@/publicui/countdown';

const SecondkillUi = () => {
    const [a1, setA1] = useState([]);
  let data1;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/home/secondkill')
      setA1(res.data);
    };
    fetchData();
  }, []);
  const data = a1.splice(0, 5).map((_val, i) => ({
    icon: _val[0],
    current: _val[1],
    old: _val[2],
  }));

  return (
    <div className="secondkillwrap">
      <Card>
        <Card.Header
          title={(
            <div className="titlewrap">
              <p className="sktitle" style={{ fontSize: '14px' }}>京东秒杀</p>
              <div className="sktimewrap" style={{ fontSize: '12px' }}>
                <CountDownUi />
              </div>
            </div>
                  )}
          extra={<span style={{ fontSize: '14px' }}>更多秒杀</span>}
        />
        <Card.Body>
          <Grid
            data={data}
            columnNum={5}
            hasLine={false}
            renderItem={(dataItem) => (
              <div style={{ padding: '0px', width: '100%', height: '100%' }}>
                <img src={dataItem.icon} style={{ width: '100%', height: '70%' }} alt="" />
                <div style={{
                  color: '#888', fontSize: '14px', width: '100%', height: '30%',
                }}
                >
                  <p style={{ height: '60%', textAglin: 'left', color: 'red' }}>
                    ￥
                    <em>{dataItem.current}</em>
                  </p>
                  <p style={{ height: '40%', textAglin: 'left' }}>
                    ￥
                    <em>{dataItem.old}</em>
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

export default SecondkillUi;
