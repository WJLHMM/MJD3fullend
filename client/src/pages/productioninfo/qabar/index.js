import React from 'react';

import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/qabar/style.scss';

const QABarUi = (props) => (
  <div className={styles.qabaruiwrap}>
    <div className={styles.pricewrap}>
      <span className={styles.price}>
        <i className="iconfont icon-anjianfengexian">&#xe680;</i>
        问答
      </span>
      <ul className={styles.icons}>
        <li className={styles.reductioninfo}>
          <p>查看全部问答</p>
          <i className="iconfont icon-arrow-right">&#xe601;</i>
        </li>

      </ul>
    </div>
    <div className={styles.pricewrap}>
      <span className={styles.question}>
        <i className="iconfont icon-wen">&#xe650;</i>
        5g手机4g卡能用吧

      </span>
      <ul className={styles.icons}>
        <li className={styles.reductioninfo}>
          <p>共15个回答</p>
        </li>

      </ul>
    </div>
    <div className={styles.pricewrap}>
      <span className={styles.question}>
        <i className="iconfont icon-wen">&#xe650;</i>
        有没有耳机啊？
      </span>
      <ul className={styles.icons}>
        <li className={styles.reductioninfo}>
          <p>共15个回答</p>
        </li>

      </ul>
    </div>

  </div>

);

export default withRouter(QABarUi);
