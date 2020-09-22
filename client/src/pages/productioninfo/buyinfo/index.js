import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/buyinfo/style.scss';

const BuyInfoUi = (props) => {
  const { price, productiondetail, itemdetail } = props;
  return (
    <div className={styles.buyinfowrap}>
      <div className={styles.pricewrap}>
        <span className={styles.price}>
          ¥
          <em>{price[0]}</em>
          <span className="pricedecimals">.00</span>
        </span>
        <ul className={styles.icons}>
          <li className={styles.reductioninfo}>
            <i className="iconfont icon-renminbi">&#xe61e;</i>
            <p>降价信息</p>
          </li>
          <li className={styles.favour}>
            <i className="iconfont icon-xin">&#xe6af;</i>
            <p>收藏</p>
          </li>
        </ul>
      </div>
      <div className={styles.productiondetail}>{ productiondetail[0]}</div>
      <div className={styles.itemdetail}>
        { itemdetail[0]}
      </div>
    </div>
  );
};

export default withRouter(BuyInfoUi);
