/** @jsx jsx */
import React, {
 Fragment, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { jsx } from '@emotion/core';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd-mobile'
import NumCounterUi from '@/publicui/numcounter';
import SplitLneUi from '@/publicui/splitline';

import {
 selectionstyle, itemcontentwrapstyle, selectionitemswraptyle, selectioncouponactionstyle, selectionheaderstyle,
} from '@/pages/cartlogined/selection/selectionitem/selectionitemstyle';

import { delectcartlistaction } from '@/pages/productioninfo/store/actioncreators'
import { actionCreators } from '@/pages/cartlogined/store'

const { alert } = Modal;

const SelectionItem = (props) => {
  const { item, username, index } = props
  const skuinfolist = useSelector((state) => (state.cartlogined.get('skuinfolist'))) || []
  const currentuserskuinfolist = skuinfolist.filter((subitem) => (subitem.username === username)) || []
  const currentsubitemcheckstatus0 = currentuserskuinfolist.map((subitem) => (subitem.checked))
  console.log('currentsubitemcheckstatus0', currentsubitemcheckstatus0)
  let currentsubitemcheckstatus1
  useEffect(() => {
    if (item[0]) {
      const jdicondom = document.getElementById(`${item[0][7].isSelfsell || item[0][6].sellername}`)
      if (!item[0][7].isSelfsell) {
        jdicondom.style.display = 'none'
      }
    }
  })
  useEffect(() =>{ /*too many rerend,should set a hooker improve */
    /*acquire current item's headerinputdom*/
    let headerinputdom
    if (item[0]) {
      headerinputdom = document.getElementById(`${item[0][7].isSelfsell || item[0][6].sellername}${index}`)
    }
    // console.log(item[0])
    /*acquire current item.s totol subinputdoms*/
    const iteminputdoms = item.map((subitem) => (document.getElementById(`${subitem[8].sku}`)))
    console.log('iteminputdoms', iteminputdoms)
    /*acqurie the unique id values of subinputdoms*/
    const itemidvalue = iteminputdoms.map((subitem) => subitem.id)
    // console.log('itemidvalue', itemidvalue)
    /*filter the subinputdom's sku info from currentuserskuinfolist by itemidvalue*/
    const currentitemskuinfolist = currentuserskuinfolist.filter((submit) => itemidvalue.filter((subitem1) => submit.sku === subitem1)[0])
    // console.log('currentitemskuinfolist', currentitemskuinfolist)
    /*assign the checked status per subinputdom*/
    iteminputdoms.forEach((subitem1, i) => {
      const obj = subitem1
      if (currentitemskuinfolist[i]) {
        obj.checked = currentitemskuinfolist[i].checked
      }
    })
    /*acquie the total subinputdom checed status info,*/
    const currentsubitemcheckstatus = currentitemskuinfolist.map((subitem) => (subitem.checked))
    /*
      assign the headerinputdom check value,by the total subinputdom's checked statue,
      if all subinputdom's checked is true(new Set().size is 1 and first subitem is true)\
      headerinpurtdom.check is true  otherwise false.
    */
   if (headerinputdom) {
      if ((new Set(currentsubitemcheckstatus).size === 1) && (currentsubitemcheckstatus[0])) {
        headerinputdom.checked = true
      } else {
        headerinputdom.checked = false
      }
   }
  }, currentsubitemcheckstatus0)

  const dispatch = useDispatch()
  const handledeleteskuitem = useCallback(
      (user, sku) => {
        dispatch(delectcartlistaction(user, sku));
        dispatch(actionCreators.deleteskuinfoaction(user, sku));
        window.location.reload()
      },
  )

  const handletoggleinputitemchecka = useCallback(
      (user, sku, isChecked) => {
         dispatch(actionCreators.toggleinputitemcheckaction(user, sku, isChecked));
      },
  )
  const handleskucheckedstatusaction = useCallback(
      (isAllChecked) => {
         dispatch(actionCreators.skucheckedstatusaction(isAllChecked));
      },
  )
  const headerinputselect = (e) => {
    const headerinputdom = document.getElementById(`${item[0][7].isSelfsell || item[0][6].sellername}${index}`)
    const headerlabel = headerinputdom.nextSibling
    const iteminputdoms = item.map((subitem) => (document.getElementById(`${subitem[8].sku}`)))
    iteminputdoms.forEach((subitem) => {
      const obj = subitem
      obj.checked =  !headerinputdom.checked
      handletoggleinputitemchecka(username, obj.id, obj.checked)
    })
    currentsubitemcheckstatus1 = currentuserskuinfolist.every((subitem) => subitem.checked === true)
    handleskucheckedstatusaction(currentsubitemcheckstatus1)
  }

  const iteminputselect = (e) => {
    const headerinputdom = document.getElementById(`${item[0][7].isSelfsell || item[0][6].sellername}${index}`)
    const iteminputselected = e.target.previousSibling
    // console.log('iteminputselected', iteminputselected)
    const iteminputdoms = item.map((subitem) => (document.getElementById(`${subitem[8].sku}`)))
    // console.log('iteminputdoms', iteminputdoms)
    const otheriteminputdoms = [...iteminputdoms].filter((subitem) => (subitem != iteminputselected))
    // console.log('otheriteminputdoms', otheriteminputdoms)
    if (otheriteminputdoms.length >= 1) {
      const otheriteminputdomscheckedstatus = otheriteminputdoms.map((subitem) => (subitem.checked))
      const otheriteminputdomscheckedstatuslength = new Set(otheriteminputdomscheckedstatus).size
      if ((otheriteminputdomscheckedstatuslength === 1) && (!iteminputselected.checked) && (otheriteminputdomscheckedstatus[0])) {
          headerinputdom.checked = true
      } else {
          headerinputdom.checked = false
      }
    } else {
      headerinputdom.checked = !iteminputselected.checked
    }
    handletoggleinputitemchecka(username, iteminputselected.id, !iteminputselected.checked)
    currentsubitemcheckstatus1 = currentuserskuinfolist.every((subitem) => subitem.checked === true)
    handleskucheckedstatusaction(currentsubitemcheckstatus1)
  }

  if (item.length >= 2) {
     return (
        <div css={selectionstyle} key={Math.random()}>
          <div className="selectionheaderwrap" css={selectionheaderstyle}>
            <div className="checkboxwrap">
              <input
                className="headerwrapcheckbox"
                type="checkbox"
                id={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
              />
               <label
                 htmlFor={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
                 className={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
                 onClick={headerinputselect}
               />
            </div>
            <div className="sellerinfo">
              <i id={item[0][7].isSelfsell || item[0][6].sellername} className="iconfont icon-jingdong">&#xe612;</i>
              <div className="isselfselling">{item[0][7].isSelfsell || item[0][6].sellername}</div>
            </div>
            <div className="reductioninfo">
            {/*
              <i className="iconfont icon-notice">&#xe6d4;</i>
              <p className="freigthfee">已免运费</p>
            */}
              <i className="iconfont icon-anjianfengexian">&#xe680;</i>
              <button type="submit" className="coupon">优惠券</button>
            </div>
          </div>
        {
          item.map((subitem) => (
              <div className="itemcontentwrap" css={itemcontentwrapstyle} key={Math.random()}>
                <div className="selectioncouponaction" css={selectioncouponactionstyle}>
                  <span className="coupontype">满减</span>
                  <p>{subitem[7].discount}</p>
                  <div className="checkprompt">
                    查看活动
                    <i className="iconfont icon-arrow-right">&#xe601;</i>
                  </div>
                </div>
                <div className="selectionitemwrap" css={selectionitemswraptyle}>
                  <div className="checkboxwrap">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={subitem[8].sku}
                    />
                    <label
                      htmlFor={subitem[8].sku}
                      className={`${subitem[8].sku}`}
                      onClick={iteminputselect}
                    />
                  </div>
                  <div className="imgshow">
                    <img alt="productionpic" className="productionshow" src={subitem[0].imgview} />
                  </div>
                  <div className="content">
                    <div className="name">
                      {subitem[2].productiondetail}
                    </div>
                    <div className="skuinfo">
                      <span className="skuinfodetail">{subitem[4].selected}</span>
                      <span className="service">选服务</span>
                    </div>
                    <div className="discoverinfo">
                      <span>{subitem[7].discount}</span>
                      <span>白条3期免息</span>
                    </div>
                    <div className="skinfo">秒杀中，2小时后结束</div>
                    <div className="priceinfo">
                      <div className="pricenum">
                        ¥
                        <em>{subitem[1].price}</em>
                        .00
                      </div>
                      <NumCounterUi
                        sku={subitem[8].sku}
                        username={username}
                      />
                    </div>
                    <div className="guanzhu">
                      <span>移入关注</span>
                      <i className="iconfont icon-anjianfengexian">&#xe680;</i>
                      <span onClick={() => {
                        alert(<span style={{ color:'red' }}>删除</span>, <span style={{ color:'red' }}>您确定要将该产品删除吗</span>, [
                          { text: 'Cancel', onPress: () => {} },
                          { text: 'Ok', onPress: () => handledeleteskuitem(username, `${subitem[8].sku}`) },
                        ])
                       }}
                      >
                        删除
                      </span>
                    </div>
                    <div className="shoppinggift">
                      赠品x1；附件x1
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
        <SplitLneUi />
        </div>
    )
  }
  return (
    <>
      {
        item.map((subitem) => (
           <div css={selectionstyle} key={Math.random()}>
              <div className="selectionheaderwrap" css={selectionheaderstyle}>
                <div className="checkboxwrap">
                  <input
                    type="checkbox"
                    className="headerwrapcheckbox"
                    id={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
                  />
                  <label
                    htmlFor={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
                    className={`${item[0][7].isSelfsell || item[0][6].sellername}${index}`}
                    onClick={headerinputselect}
                  />
                </div>
                <div className="sellerinfo">
                  <i id={item[0][7].isSelfsell || item[0][6].sellername} className="iconfont icon-jingdong">&#xe612;</i>
                  <div className="isselfselling">{subitem[7].isSelfsell || subitem[6].sellername}</div>
                </div>
                <div className="reductioninfo">
                  {/*
                  <i className="iconfont icon-notice">&#xe6d4;</i>
                  <p className="freigthfee">已免运费</p>
                  */}
                  <i className="iconfont icon-anjianfengexian">&#xe680;</i>
                  <button type="submit" className="coupon">优惠券</button>
                </div>
              </div>
              <div className="itemcontentwrap" css={itemcontentwrapstyle}>
                <div className="selectioncouponaction" css={selectioncouponactionstyle}>
                  <span className="coupontype">满减</span>
                  <p>{subitem[7].discount}</p>
                  <div className="checkprompt">
                    查看活动
                    <i className="iconfont icon-arrow-right">&#xe601;</i>
                  </div>
                </div>
                <div className="selectionitemwrap" css={selectionitemswraptyle}>
                  <div className="checkboxwrap">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={subitem[8].sku}
                    />
                    <label
                      htmlFor={subitem[8].sku}
                      className={`${subitem[8].sku}`}
                      onClick={iteminputselect}
                    />
                  </div>
                  <div className="imgshow">
                    <img alt="productionpic" className="productionshow" src={subitem[0].imgview} />
                  </div>
                  <div className="content">
                    <div className="name">
                      {subitem[2].productiondetail}
                    </div>
                    <div className="skuinfo">
                      <span className="skuinfodetail">{subitem[4].selected}</span>
                      <span className="service">选服务</span>
                    </div>
                    <div className="discoverinfo">
                      <span>{subitem[7].discount}</span>
                      <span>白条3期免息</span>
                    </div>
                    <div className="skinfo">秒杀中，2小时后结束</div>
                    <div className="priceinfo">
                      <div className="pricenum">
                        ¥
                        <em>{subitem[1].price}</em>
                        .00
                      </div>
                      <NumCounterUi
                        sku={subitem[8].sku}
                        username={username}
                      />
                    </div>
                    <div className="guanzhu">
                      <span>移入关注</span>
                      <i className="iconfont icon-anjianfengexian">&#xe680;</i>
                      <span onClick={() => {
                        alert(<span style={{ color:'red' }}>删除</span>, <span style={{ color:'red' }}>您确定要将该产品删除吗?</span>, [
                          { text: 'Cancel', onPress: () => {}  },
                          { text: 'Ok', onPress: () => handledeleteskuitem(username, `${subitem[8].sku}`) },
                        ])
                        }}
                      >
                        删除
                      </span>
                    </div>
                    <div className="shoppinggift">
                      赠品x1；附件x1
                    </div>
                  </div>
                </div>
              </div>
            <SplitLneUi />
           </div>
        ))
      }
    </>
  )
}
export default withRouter(SelectionItem);
