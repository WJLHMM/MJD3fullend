import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';

import { addcartlistaction } from '@/pages/productioninfo/store/actioncreators';
import { actionCreators } from '@/pages/cartlogined/store';
import styles from '@/pages/productioninfo/selectedbar/style.scss';

const SelectedBar = (props) => {
  const islogined = useSelector((state) => state.login2.get('islogined'));
  const username = useSelector((state) => state.login2.get('username'));
  const cartskulist = useSelector((state) => state.productioninfo.cartskulist || state.productioninfo.get('cartskulist'));
  const skulist = cartskulist[username] || cartskulist.toJS()[username]
  let badgenum;
  if (skulist) {
    badgenum = skulist.length;
  } else {
    badgenum = 0;
  }
  const { sku, price } = props;
  const skuinfo = {
    username,
    sku,
    price:price[0],
    number:1,
    checked:true,
  }
  const dispatch = useDispatch();
  const handleaddcartlist = useCallback(
    () => {
      if (islogined) {
        if (skulist && skulist.indexOf(sku) !== -1) {
          Toast.fail('该产品已经在您的购物车中,请添加其他产品', 1);
        } else {
          dispatch(addcartlistaction(username, sku));
          dispatch(actionCreators.initskuinfoaction(skuinfo));
          Toast.success('您已成功添加该产品至购物车', 1);
        }
      } else {
         Toast.fail('请您先登录', 1);
      }
    },
  );

  return (

    <div
      className={styles.selectedbarwrap}
    >
      <ul className={styles.selectedbar}>
        <li className={styles.selectedbaritem}>
          <i className="iconfont icon-kefu">&#xe68c;</i>
          <p className="title">客服</p>
        </li>
        <li className={styles.selectedbaritem}>
          <i className="iconfont icon-dianpu">&#xe6aa;</i>
          <p className="title">店铺</p>
        </li>
        <li
          id={styles.cartbadgeli}
          className={styles.selectedbaritem}
          onClick={() => {
            islogined ? props.history.push(`/cartlogined/${username}`) : props.history.push('/cartunlogin')
          }}
        >
          <i className="iconfont icon-gouwuche1">&#xe600;</i>
          <p className="title">购物车</p>
          <span className={styles.cartbadge}>{ islogined ? `${badgenum}` : 0 }</span>
        </li>
        <li
          id={styles.cartbtn}
          className={styles.selectedbaritem}
          onClick={() => { handleaddcartlist(); }}
        >
          加入购物车
        </li>
        <li id={styles.buybtn} className={styles.selectedbaritem}>立即购买</li>
      </ul>
    </div>
  );
};

export default withRouter(SelectedBar);
