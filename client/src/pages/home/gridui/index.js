import React, { useState, useEffect } from 'react';
import { Grid } from 'antd-mobile';
import axios from 'axios'

const GridUi = () => {
  const [a1, setA1] = useState([]);
  let data1;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/home/grid')
      setA1(res.data);
    };
    fetchData();
  }, []);

  const data = a1.splice(0, 10).map((_val, i) => ({
    icon: Object.values(_val)[0],
    text: Object.keys(_val)[0],
  }));

  return (
    <div className="flooritemwrap">
      <Grid
        data={data}
        columnNum={5}
        hasLine={false}
        renderItem={(dataItem) => (
          <div className="itemwrap" style={{ paddingRignt: '6px', width: '100%', height: '90%' }}>
            <img src={dataItem.icon} style={{ width: '58%', height: '100%' }} alt="" />
            <div style={{
              color: '#888', fontSize: '14px', width: '100%', height: '20%',
            }}
            >
              <span style={{ marginLeft: '3px' }}>{dataItem.text}</span>
            </div>
          </div>
        )}
      />

    </div>
  );
}

export default GridUi;
