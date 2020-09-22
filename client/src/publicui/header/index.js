import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/publicui/header/styles.less';

const HeaderUi = (props) => {
  // console.log(props)
  const { url, params } = props.match;
  const  [title, setTitle] = useState()
  const indexReturn = (key) => url.indexOf(key) === 1

  useEffect(() => {
    if (indexReturn('login')) {
      setTitle('登录注册');
      const icon1 = document.getElementById('icon1');
      icon1.style.display = 'none';
    } else if (indexReturn('cart')) {
      setTitle('购物车');
    } else if (indexReturn('productioninfo')) {
      const headeruiwrapwrap = document.getElementById('headeruiwrapwrap');
      headeruiwrapwrap.style.display = 'none';
      window.addEventListener('scroll', () => {
        const t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t < 50) {
          headeruiwrapwrap.style.display = 'none';
        } else {
          headeruiwrapwrap.style.display = 'block';
          headeruiwrapwrap.style.position = 'fixed';
          headeruiwrapwrap.style.maxWidth = '640px';
          headeruiwrapwrap.style.top = 0;
        }
      }, false);
      const selecttabwrap = document.getElementById('selecttabwrap');
      selecttabwrap.style.display = 'block';
      const titlecontent = document.getElementById('titlecontent');
      titlecontent.style.display = 'none';
    } else if (indexReturn('myinfo')) {
     setTitle(`${params.userid}的信息`);
    }
  });

  return (
    <div id="headeruiwrapwrap" className={styles.headeruiwrapwrap}>
      <div id="headeruiwrap" className={styles.headeruiwrap}>
        <div
          role="button"
          className={styles.icon}
          onClick={() => {
            if (props.match.path.indexOf('myinfo') === 1) {
              props.history.push('/home');
            } else {
              props.history.goBack();
            }
            // window.location.reload()
          }}
          onKeyPress={() => { }}
        >
          <i className="iconfont icon-arrow-left-copy">&#xe602;</i>

        </div>
        <p id="titlecontent" className={styles.title}>{ title }</p>
        <div id="selecttabwrap" className={styles.selecttabwrap}>
          <ul id={styles.selecttab} className={styles.selecttab}>
            <li className="selectionitem">商品</li>
            <li className="selectionitem">评价</li>
            <li className="selectionitem">详情</li>
            <li className="selectionitem">推荐</li>
          </ul>
        </div>
        <div id="icon1" className={styles.icon1}>
          <i className="iconfont icon-deng">&#xe70f;</i>
        </div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default withRouter(HeaderUi);
