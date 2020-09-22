import React from 'react';
import { withRouter } from 'react-router-dom';

import PicViewUi from '@/pages/productioninfo/commentlist/picview';
import styles from '@/pages/productioninfo/commentlist/style.scss';

const CommentUi = () => (
  <div id="commentlistwrap" className={styles.commentlistwrap}>
    <div className={styles.pricewrap}>
      <span className={styles.price}>
        <img alt="logs" src="https://storage.360buyimg.com/i.imageUpload/6a645f3731343134616263393733323331353932373437373239303634_sma.jpg" />
        <span className={styles.pricedecimals}>jd*****jk</span>
        <i className="iconfont icon-weibiaoti1">&#xe605;</i>
        <i className="iconfont icon-weibiaoti1">&#xe605;</i>
        <i className="iconfont icon-weibiaoti1">&#xe605;</i>
        <i className="iconfont icon-weibiaoti1">&#xe605;</i>
        <i className="iconfont icon-weibiaoti1">&#xe605;</i>
      </span>
      <ul className={styles.icons}>
        <li className={styles.reductioninfo}>
          2020-07-23
        </li>

      </ul>
    </div>
    <div className={styles.productiondetail}>
      整体手感较好，用料做工精细手机大小合适。❌❌❤-省*3*白-卷/✚.wei.芯：aping零⑥②其中的-零-换小写数字哦。便宜到手。外观高大上好看，音效，拍照都很清晰，快充好，充电快，方便，这颜色合适女性使用，用了一段时间才评价，感觉挺好的，运行快，内存也够用，这次还是选择红米，支持国货。性价比非常高，小米手机用起来也非常舒服，家里都用小米手机，良心价格，不挑剔。摄像头拍照特别清晰，试完了一把游戏。完全不卡。视频流畅，充电也不发热，而且充电速度快，还有4000毫安的电池。屏幕右上方的位置设计有前置双摄，拿在手上，我感觉比水滴屏，刘海屏和单挖孔屏看起来更好看一点，使用之后很容易习惯这个设计。我发现红米一直都喜欢在手机上标配最好的摄像头，这对于喜欢拍照的人来说，还是比较有用的，索尼的IMX686的素质，应该是目前市面上拍照效果最好的，我随便试了试效果，感觉画质的纯净度好像有所提升，另外在6400万拍照模式下，延迟大概在1秒左右，可以接受。中度使用一天完全没有问题。
    </div>
    <div id="picviewui" className={styles.picviewui}>
      <PicViewUi />
    </div>

  </div>

);

export default withRouter(CommentUi);
