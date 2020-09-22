import React, { } from 'react';

import styles from '@/publicui/sortbar/style.scss';

const SortBarUi = () => (
  <>
    <div className={styles.sortbaruiwrap}>
      <ul className={styles.sortkeyword}>
        <li className={styles.keyword}>
          综合
          <i className="iconfont icon-arrdown">&#xe637;</i>
        </li>
        <li className={styles.keyword}>销量</li>
        <li className={styles.keyword}>
          有货优先
          <i className="iconfont icon-arrdown">&#xe637;</i>
        </li>
        <li className={styles.keyword}>
          筛选
          <i className="iconfont icon-guolvqi">&#xe62f;</i>
        </li>
      </ul>
    </div>
  </>
);

export default SortBarUi;
