/** @jsx jsx */
import React, { useEffect, useCallback, useRef } from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux'
import {
  settlementbarwrapstyle,
} from '@/pages/cartlogined/settlementbar/settlementbarstyle';
import { actionCreators } from '@/pages/cartlogined/store'

const SettlementBarUi = (props) => {
    const checkboxtotal = useRef()
    const skuinfolist = useSelector((state) => (state.cartlogined.get('skuinfolist'))) || []
    const subitemcheckstatus = useSelector((state) => (state.cartlogined.get('subitemcheckstatus')))
    const username = useSelector((state) => (state.login2.get('username'))) || []
    const currentuserskuinfolist = skuinfolist.filter((subitem) => (subitem.username === username)) || []
    const currentsubitemcheckstatus1 = currentuserskuinfolist.every((subitem) => subitem.checked === true)
    useEffect(() => { /*for input tag if you click it you shouldn't set the checked status, so need subitemcheckstatus controal*/
        if (currentsubitemcheckstatus1) {
            checkboxtotal.current.checked = true
        } else {
            checkboxtotal.current.checked = false
        }
    }, [subitemcheckstatus])
    let totleamount = 0
    const currentuserskuinfolistcheckedtrue = currentuserskuinfolist.filter((subitem) => (subitem.checked != false))
    currentuserskuinfolistcheckedtrue.forEach((subitem) => {
        totleamount += parseInt(subitem.number, 10) * parseInt(subitem.price, 10)
    })
    const dispatch = useDispatch()
    const handletoggleinputitemchecka = useCallback(
      (user, sku, isChecked) => {
         dispatch(actionCreators.toggleinputitemcheckaction(user, sku, isChecked));
      },
    )

    const totalcheckboxselect = () => {
        const totalinputdoms = document.getElementsByTagName('input')
        const reg1 = /^\d+$/g
        const othersubinputdoms = [...totalinputdoms].filter((item) => (reg1.test(item.id)))
        othersubinputdoms.forEach((inputitem) => {
            const obj = inputitem
            obj.checked = !checkboxtotal.current.checked
            handletoggleinputitemchecka(username, obj.id, !checkboxtotal.current.checked)
        })
    }
    return (
        <div className="settlementbarwrap" css={settlementbarwrapstyle}>
            <div className="selectedicon">
                <div className="checkboxtotal">
                    <input type="checkbox" id="checkboxtotal" ref={checkboxtotal} />
                    <label
                      htmlFor="checkboxtotal"
                      onClick={totalcheckboxselect}
                    />
                </div>
            </div>
            <div className="totleamount">
                <div className="settlementamountwrap">
                    <div className="settlementamount">
                        <div className="amount">总计:</div>
                        <span className="amountyuan">￥</span>
                        <em className="amountdigit">{totleamount}</em>
                        .00
                    </div>
                    <div className="settlementdiscount">
                        <div className="currentdiscount">已优惠:</div>
                        <span>￥</span>
                        <em className="currentdiscountdigit">120</em>
                        .00
                    </div>
                </div>
                <div className="settlementbtn">
                    {`去结算(${currentuserskuinfolistcheckedtrue.length}件)`}
                </div>
            </div>
        </div>
    )
}

export default SettlementBarUi;
