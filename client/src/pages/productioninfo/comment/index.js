import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/comment/style.scss';

const CommentUi = (props) => {
  const { comment } = props;
  return (
    <div className={styles.commentuiwrap}>
      <div className={styles.pricewrap}>

        <span className={styles.price}>
          <i className="iconfont icon-anjianfengexian">&#xe680;</i>
          评价
          <span className={styles.pricedecimals}>{ comment[0].commentnum}</span>
        </span>
        <ul className={styles.icons}>
          <li className={styles.reductioninfo}>
            <p>好评度</p>
            <p>{comment[1].goodcomrate}</p>
            <i className="iconfont icon-arrow-right">&#xe601;</i>
          </li>

        </ul>
      </div>
      <div className={styles.productiondetail}>
        {

				comment[2].commentuiwrap.map((item) => <p key={Math.random()}>{item}</p>)
			}

      </div>
    </div>

  );
};

export default withRouter(CommentUi);
