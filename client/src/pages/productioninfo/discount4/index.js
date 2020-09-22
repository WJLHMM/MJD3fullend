import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '@/pages/productioninfo/discount4/style.scss';

const DiscountUi = (props) => {
  const { weight } = props;
  return (
    <div className={styles.discountwrap}>
      <span className={styles.discountlogo}>重量</span>
      <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
      <div>
        <span className={styles.desc1}>{weight[0]}</span>

      </div>

    </div>

  );
};

export default withRouter(DiscountUi);
