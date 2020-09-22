import React, { useEffect, useState } from 'react';
import { Card, WingBlank, Grid } from 'antd-mobile';
import  axios from "axios";

const DjxyadvUi = () => {
  const [a1, setA1] = useState([]);
  let data1;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/home/djxyadv')
      setA1(res.data);
    };
    fetchData();
  }, []);
  const data = a1.splice(0, 8).map((_val) => ({
     icon: _val[0],
      text: _val[1],
      text2: _val[2],
  }));
  return (
    <div className="djxywrap">
      <WingBlank size="lg">
        <Card>
          <Card.Header
            title={(
              <div className="titlewrap" style={{ width: '100%', height: '2.4rem' }}>
                <img alt="headpic" style={{ width: '100%', height: '100%' }} src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/120788/8/5449/24646/5ef008ccEa30f561d/b59f6d8807cfb020.png!q70.jpg.dpg" />
              </div>
            )}
          />
          <Card.Body>
            <Grid
              data={data}
              columnNum={4}
              hasLine={false}
              renderItem={(dataItem) => (
                <div style={{ padding: '0px', width: '100%', height: '100%' }}>
                  <div style={{ color: '#888', width: '100%', height: '30%' }}>
                    <p style={{ height: '60%', fontSize: '10px' }}>{dataItem.text}</p>
                    <p style={{ height: '40%', fontSize: '10px' }}>{dataItem.text2}</p>
                  </div>
                  <img id={dataItem.text} src={dataItem.icon} style={{ width: '60%', height: '56%' }} alt="" />
                </div>
              )}
            />

          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}

export default DjxyadvUi;
