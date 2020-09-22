import React, { useEffect, Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/myinfo/myinfopurchasing/myinfopurchasing.scss';

const MyinfoPurchasingUi = (props) => (
  <ul className={styles.myinfopurchasing}>
    <li className={styles.myinfopurchasingitem}>
      <div className={styles.myinfopurchasing_upper} />
      <div className={styles.myinfopurchasing_below}>待付款</div>
    </li>
    <li className={styles.myinfopurchasingitem}>
      <div className={styles.myinfopurchasing_upper} />
      <div className={styles.myinfopurchasing_below} />
    </li>
    <li className={styles.myinfopurchasingitem}>
      <div className={styles.myinfopurchasing_upper} />
      <div className={styles.myinfopurchasing_below} />
    </li>
    <li className={styles.myinfopurchasingitem}>
      <div className={styles.myinfopurchasing_upper} />
      <div className={styles.myinfopurchasing_below} />
    </li>
  </ul>
);

export default MyinfoPurchasingUi;
