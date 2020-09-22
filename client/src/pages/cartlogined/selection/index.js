/** @jsx jsx */

import React, { Component, Fragment } from 'react';
import { jsx, css } from '@emotion/core'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import SelectionItem from '@/pages/cartlogined/selection/selectionitem';

import {
  selectionstyle,
  itemcontentwrapstyle,
} from '@/pages/cartlogined/selection/selectionstyle';

@connect(
  (state) => ({
    username: state.login2.get('username'),
    cartskulist: state.productioninfo.get('cartskulist'),
  }),
)
@withRouter
class SelectionUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      cartlist: [],
    };
  }

  componentDidMount() {
    const { username, cartskulist } = this.props
    /*get current username's skulist*/
    const skulist = cartskulist[username] || (cartskulist.toJS())[username]
    axios.get('cartlogined/selection').then((res) => {
      this.setState({
        data:[...res.data],
      }, () => {
        /*get the datalist in cart by skulist*/
        const cartlistObjArray = skulist.map((item) => this.state.data.filter((item1) => item1[item])[0])
        /* let dattalist merger skulist */
        let cartlistArray = []
        cartlistObjArray.forEach((item) => { /* 复杂数组的push不太好使，使用ES6可以 */
          cartlistArray = [...cartlistArray, [...Object.values(item)[0], { sku: Object.keys(item)[0] }]]
        })
        /* get the list of selfselling'*/
        const cartlistArrayisSelling1 = cartlistArray.filter((item) => (item[7].isSelfsell == "京东自营"))
        /* get the list of noselfselling*/
        const cartlistArraynoisSelling1 = cartlistArray.filter((item) => (item[7].isSelfsell == ""))
        /* get the sellerlist in noselfselling*/
        const cartlistArraynoisSellinglist = Array.from(new Set(cartlistArraynoisSelling1.map((item) => (item[6].sellername))))
        /* reset the noselfselling by sellerlist */
        const cartlistArraynoisSellinglistreset = cartlistArraynoisSellinglist.map((item) =>cartlistArraynoisSelling1.filter((item1) =>item1[6].sellername === item))
        /* get the last cartskulist sort by isselfseller and sellername  */
        this.setState({
          cartlist:[cartlistArrayisSelling1, ...cartlistArraynoisSellinglistreset],
        })
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { cartskulist, username } = this.props
    // console.log(cartskulist)
    const { cartlist } = this.state
    const flag = (cartskulist[username] || (cartskulist.toJS())[username] || []).length === 0
    // console.log('selection', (cartskulist[username] || (cartskulist.toJS())[username]))
    return (
      <>
        {
          !flag
          ? (
            <div className="selectionwrap" css={selectionstyle}>
            {
              cartlist.map((item, index) => (
                <SelectionItem
                  item={item}
                  index={index}
                  username={username}
                  key={Math.random()}
                />
              ))
            }
            </div>
          ) : (
            <div
              style={{
                width:'100%',
                height:'100px',
                lineHeight:'100px',
                margin:'0 auto',
                color:'red',
                textAlign:'center',
              }}
            >
              您的购物车空空的！快去添加哦!
            </div>
          )
        }
      </>
    )
  }
}

export default SelectionUi
