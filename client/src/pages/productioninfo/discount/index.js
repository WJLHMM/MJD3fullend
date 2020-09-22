import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/discount/style.scss';

const DiscountUi = (props) => {
  const { discount } = props;

  return (
    <div className={styles.discountwrap}>
      <span className={styles.discountlogo}>优惠</span>
      <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
      {

        discount.map((item) => {
          if (item.length === 1 && item[0] != '') {
            return (
              <div className={styles.discoutcontent} key={Math.random()}>
                <em>{item[0]}</em>
              </div>
            )
          } else if (item.length === 2 && item[0] != '') {
            return (
              <div className={styles.discoutcontent} key={Math.random()}>
                <em>{item[0]}</em>
                <span>{item[1]}</span>
              </div>
            )
          }
          return (<div key={Math.random()}>                            </div>)
        })
       }
    </div>
  );
};

export default withRouter(DiscountUi);
