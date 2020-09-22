import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/discount2/style.scss';

const DiscountUi = (props) => {
  const { selected } = props;
  return (
    <div className={styles.discountwrap}>
      <span className={styles.discountlogo}>已选</span>
      <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
      <div>
        <span className={styles.desc1}>{selected[0].production}</span>
      </div>
      <div>
        <span className={styles.servce}>{selected[1].service}</span>
      </div>

    </div>

  );
};

export default withRouter(DiscountUi);
