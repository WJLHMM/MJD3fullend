import React from 'react';

import styles from '@/pages/productioninfo/sellerinfo/style.scss';

const SellerInfoUi = (props) => {
  const { sellerinfo } = props;
  return (
    <div className={styles.sellerinfowrap}>
      <div className={styles.sellernamewrap}>
        <img className={styles.sellerlogo} src={sellerinfo[0].sellerimg} alt="sellerlogo" />
        <p className={styles.sellername}>{sellerinfo[1].sellername}</p>
        <em className={styles.jd}>{sellerinfo[2].isSelfsell}</em>
      </div>
      <ul className={styles.sellerdatawrap}>
        <li className="faninf">
          <p>{ sellerinfo[3].fansnum }</p>
          <p className={styles.fnname}>粉丝人数</p>
        </li>
        <li className="faninf">
          <p>{ sellerinfo[4].goodsnum}</p>
          <p className={styles.fnname}>全部商品</p>
        </li>
      </ul>
      <ul className={styles.productiondetail}>
        <li className="faninf">
          <button className="focus" type="submit">
            <i className="iconfont icon-wubianxing">&#xe64c;</i>
            关注店铺
          </button>
        </li>
        <li className="faninf">
          <button className="enter" type="submit">
            <i className="iconfont icon-dianpu">&#xe6aa;</i>
            进入店铺
          </button>
        </li>
      </ul>

    </div>

  );
};

export default SellerInfoUi;
