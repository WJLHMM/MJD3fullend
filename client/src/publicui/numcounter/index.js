import React, {
 useState, useRef, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import styles from '@/publicui/numcounter/style.less';
import { actionCreators } from '@/pages/cartlogined/store'

const NumCounterUi = (props) => {
  const { sku, username } = props
  let skuref = `${sku}ref`
  skuref  = useRef()
  const skuinfolist = useSelector((state) => (state.cartlogined.get('skuinfolist'))) || []
  const skuinfo = skuinfolist.filter((subitem) => subitem.sku === sku)
  let { number } = skuinfo[0] || 1
  const dispatch = useDispatch()
  const handlechangeskulistnumber = useCallback(
      (user, s, n) => {
        dispatch(actionCreators.changeskulistnumberaction(user, s, n));
      },
  )
  const plus = (e) => {
      if (number >= 10) {
        number =  10
      } else {
        number += 1
      }
      e.target.parentNode.previousSibling.value = number
      const count = parseInt(e.target.parentNode.previousSibling.value, 10)
      handlechangeskulistnumber(username, sku, count)
    }

  const minus = (e) => {
      if (number <= 1) {
        number =  1
      } else {
        number -= 1
      }
      e.target.parentNode.nextSibling.value = number
      const count = parseInt(e.target.parentNode.nextSibling.value, 10)
      handlechangeskulistnumber(username, sku, count)
    }
  return (
    <div className={styles.numcouteruiwrap}>
      <div className={styles.iconsub}>
        <i
          role="button"
          className="iconfont icon-jiajiananniu01"
          onClick={minus}
          onKeyPress={() => {}}
          tabIndex={0}
        >
          &#xe64f;
        </i>
      </div>
      <input
        type="text"
        className={styles.countcontainer}
        ref={skuref}
        value={number}
        readOnly
      />
      <div className={styles.iconadd}>
        <i
          role="button"
          className="iconfont icon-jia1"
          onClick={plus}
          onKeyPress={() => {}}
          tabIndex={0}
        >
          &#xe624;
        </i>
      </div>
    </div>
  );
};
export default NumCounterUi;
