import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '@/pages/productioninfo/discount5/style.scss';

const DiscountUi = (props) => {
  const { deliveryservice } = props;
  return (
    <div className={styles.discountwrap}>
      <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
      {
				deliveryservice.map((item) => (
  <div key={Math.random()}>
    <i id={styles.icondagou} className="iconfont icon-dagou">&#xe604;</i>
    <span className={styles.desc1}>{item}</span>
  </div>
				))
			}
    </div>

  );
};

export default withRouter(DiscountUi);
