import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '@/pages/productioninfo/discount3/style.scss';

const DiscountUi = (props) => {
  const { delivery } = props;
  return (
    <div className={styles.discountwrap}>
      <span className={styles.discountlogo}>送至</span>
      <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
      <div>
        <span className={styles.desc1}>{delivery[0]}</span>
      </div>
      <div>
        <span className={styles.title}>现货</span>
        <span className={styles.servce}>23:10前下单，预计</span>
        <span className={styles.servce}>明天(07月24日)</span>
      </div>

    </div>

  );
};

export default withRouter(DiscountUi);
