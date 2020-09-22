import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

import styles from '@/pages/productioninfo/style.scss'
import SplitLineUi from '@/publicui/splitline'

const LazyImgHeaderUi = React.lazy(() => import(/* webpackChunkName:"hearder" */'@/publicui/header'))
const LazyImgShowViewUi = React.lazy(() => import(/* webpackChunkName:"imgview" */'@/pages/productioninfo/imgview'))
const LazyBuyInfoUi = React.lazy(() => import(/* webpackChunkName:"buyinfo" */'@/pages/productioninfo/buyinfo'))
const LazyDiscountUi = React.lazy(() => import(/* webpackChunkName:"discount" */'@/pages/productioninfo/discount'))
const LazyDiscountUi2 = React.lazy(() => import(/* webpackChunkName:"discount2" */'@/pages/productioninfo/discount2'))
const LazyDiscountUi3 = React.lazy(() => import(/* webpackChunkName:"discount3" */'@/pages/productioninfo/discount3'))
const LazyDiscountUi4 = React.lazy(() => import(/* webpackChunkName:"discount4" */'@/pages/productioninfo/discount4'))
const LazyDiscountUi5 = React.lazy(() => import(/* webpackChunkName:"discount5" */'@/pages/productioninfo/discount5'))
const LazyCommentUi = React.lazy(() => import(/* webpackChunkName:"comment" */'@/pages/productioninfo/comment'))
const LazyCommentlistUi = React.lazy(() => import(/* webpackChunkName:"commentlist" */'@/pages/productioninfo/commentlist'))
const LazySelectedBar = React.lazy(() => import(/* webpackChunkName:"selectedbar" */'@/pages/productioninfo/selectedbar'))
const LazyQABarUi = React.lazy(() => import(/* webpackChunkName:"qabar" */'@/pages/productioninfo/qabar'))
const LazySellerInfoUi = React.lazy(() => import(/* webpackChunkName:"sellerinfo" */'@/pages/productioninfo/sellerinfo'))

@withRouter
class ProductionInfo extends PureComponent {
  constructor() {
    super()
    this.state = {
      /* 务必要设置一个非空值，否则第一次点击路由正常显示页面，第二次会报错，需要刷新再显示 */
      imgview: ["https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114769/9/12319/168411/5f0d1126Eb45debdc/a934fa6127e62a5b.jpg!q80.dpg"],
      price: [1849],
      productiondetail: ["科龙(Kelon) 京品家电 1.5匹 风骑士 一级能效 智能控制 变频冷暖 静音 壁挂式空调挂机 KFR-35GW/FA1-A1"],
      itemdetail: ["【科龙优惠购】今日抢购价不高于1849！【一级变频】手机智控，18点关注直播间张继科京东直播首秀，更有大额优惠券！详戳"],
      discount: [
        ["满1980减100"],
        ["赠品", "登比 空调挡风板 防直吹遮风导风板出口风挡板月子防风板冷风导风板罩 1-2匹通用 X1"],
        ["满额返券", "买空调品类满500元返电视&amp;冰洗冷品类东券，额度满1500减100"],
      ],
      selected: [
        { production: "1.5匹，【风骑士一级智能空调】，1个" },
        { service: "本商品支持保障服务、京东服务+，点击可选服务" },
      ],
      delivery: ["北京天安门广场000号"],
      weight: ["不计重量"],
      deliveryservice: ["99元免基础运费", "京东发货&商家售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓"],
      comment: [
        { commentnum: "3万+" },
        { goodcomrate: "99%" },
        { commentuiwrap: ["送货安装(3904)", "节能环保(1917)", "简洁大方(794)", "冷热两用(775)", "美观大气(466)", "噪音很小(230)", "外观漂亮(173)", "反应迅速(109)", "方便省事(106)", "使用舒适(78)", "风大马力足(38)", "方便快捷(10)", "省时便捷(10)"] },

      ],
      sellerinfo: [
        { sellerimg: "https://img13.360buyimg.com/cms/jfs/t29203/140/1200329173/126480/7f83faef/5ce36e72N476c39bd.gif" },
        { sellername: "科龙空调京东自营旗舰店" },
        { isSelfsell: "京东自营" },
        { fansnum: "353万" },
        { goodsnum: "28" },

      ],
      sku: '12368216',
    }
  }

  componentDidMount() {
    const { category, sku } = this.props.match.params
    axios.get('productioninfo/productioninfototal').then((res) => {
        const mockdata = res.data
        const mockcategorydata = mockdata.filter((item) => item[category])
        const mocksku = mockcategorydata[0][category].filter((item) => item.sku == sku)
        if (mocksku.length === 1) {
          this.setState({
            sku,
            price: mocksku[0].price,
            imgview: mocksku[0].imgview,
            productiondetail: mocksku[0].productiondetail,
            itemdetail: mocksku[0].itemdetail,
            discount: mocksku[0].discount,
            selected: mocksku[0].selected,
            delivery: mocksku[0].delivery,
            weight: mocksku[0].weight,
            comment: mocksku[0].comment,
            sellerinfo: mocksku[0].sellerinfo,
          })
        } else {
          this.setState({
            sku: 0,
          })
        }
    })
  }

  componentWillUnmount() {
    this.setState({
      imgview: [],
      price: [],
      productiondetail: [],
      itemdetail: [],
      discount: [],
      selected: [],
      delivery: [],
      weight: [],
      deliveryservice: [],
      comment: [],
      sellerinfo: [],
    })
  }

  render() {
    // debugger
    const {
      imgview,
      sku,
      price,
      discount,
      selected,
      delivery,
      weight,
      comment,
      sellerinfo,
      deliveryservice,
    } = this.state
    return (
      <div className="productioninfowrap">
        <LazyImgHeaderUi />
        <SplitLineUi />
        {
            (sku === 0)
              ? (
                  <div
                    id="dataupdateshow"
                    style={{
                     fontSize:'16px', color:'#f2270c', margin:'200px auto', width: '100%', textAlign: 'center',
                    }}
                    onClick={() => { this.props.history.goBack() }}
                  >
                  数据更新中,请点击我或者返回,选择其他产品
                  </div>
                  )
              : (
                <>
                  <i
                    id={styles.iconarrowleftcopystyle}
                    className="iconfont icon-arrow-left-copy"
                  >
                    &#xe602;
                  </i>
                  <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
                  <LazyImgShowViewUi imgsrcs={imgview} />
                  <LazyBuyInfoUi price={price} productiondetail={this.state.productiondetail} itemdetail={this.state.itemdetail} />
                  <LazyDiscountUi discount={discount} />
                  <SplitLineUi />
                  <LazyDiscountUi2 selected={selected} />
                  <SplitLineUi />
                  <LazyDiscountUi3 delivery={delivery} />
                  <SplitLineUi />
                  <LazyDiscountUi4 weight={weight} />
                  <LazyDiscountUi5 deliveryservice={deliveryservice} />
                  <LazyCommentUi comment={comment} />
                  <LazyCommentlistUi />
                  <SplitLineUi />
                  <LazyCommentlistUi />
                  <div style={{ background: "#fff", width: "100%", paddingBottom: "10px" }}>
                    <div className={styles.viewallcomment}>
                      <span>查看全部评价</span>
                      <i className="iconfont icon-arrow-right">&#xe601;</i>
                    </div>
                  </div>
                  <LazySelectedBar sku={sku} price={price} />
                  <SplitLineUi />
                  <LazyQABarUi />
                  <LazySellerInfoUi sellerinfo={sellerinfo} />
                </>
              )
        }
      </div>
    );
  }
}

export default ProductionInfo;
