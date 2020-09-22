import React, {
  useState,
  useCallback,
  useRef,
} from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toast } from 'antd-mobile';

import { actionCreators } from '@/pages/login2/store';
import styles from '@/pages/myinfo/myinfocard/myinfocard.scss';

const MyinfocardUi = (props) => {
  /* control quitdom's show or hide */
  const [isquitdomshow, setIsquitdomshow] = useState(false);
  const quitdom = useRef();
  const togglequitui = () => {
    quitdom.current.style.display = (!isquitdomshow) ? 'block' : 'none';
    setIsquitdomshow(() => !isquitdomshow);
  };

  /*
		logout action, islogin false, push to homepage.  be caoution the islogined is in login2Reduce,
		so state and dispatch action is defined in @/pages/login2/logininputui/store

	*/
  // const islogined = useSelector( state => state.login2.get('islogined'))
  // const [islogined,setIslogined ] = useState(initislogined)
  const dispatch = useDispatch();
  const logoutfn = useCallback(
    () => {
      dispatch(actionCreators.logoutaction());
      Toast.success(`${props.match.params.userid}您已经成功退出`, 0.5);
      setTimeout(() => { props.history.push('/home'); }, 800);
    },
  );
  // const logoutfn = useCallback(() => setIslogined( state => !state.login2.get('islogined')))
  return (
    <div className={styles.myinfocardwrap}>
      <div className={styles.myinfocard}>
        <div className={styles.myaccountman}>
          <i
            className="iconfont icon-shezhi"
            onClick={() => { togglequitui(isquitdomshow); }}
          >
            &#xe609;
          </i>
          <span>账号管理</span>
          <p
            ref={quitdom}
            className={styles.quit}
            style={{ display: 'none' }}
            onClick={() => { logoutfn(); }}
          >
            退出
          </p>
        </div>
        <div className={styles.myinfodetail}>
          <div className={styles.myavater}>
            <p className={styles.myavaterimg} />
          </div>
          <div className={styles.mydetails}>
            <div className={styles.mynickname}>
              <span className={styles.mynicknamearea}>开往春天的列车</span>
              <i id={styles.icon} className="iconfont icon-bianji1">&#xe750;</i>
              <span id={styles.icon2}>
                <i id={styles.icon3} className="iconfont icon-jinpai">&#xe614;</i>
                金牌
              </span>
            </div>
            <div className={styles.mylogname}>
              <span>
                用户名:
                {props.match.params.userid}
              </span>
            </div>
            <div className={styles.mycreditinfo}>
              <button type="button">积分值99</button>
              <button type="button">信用值100</button>
            </div>
          </div>
        </div>
        <div className={styles.myinfo_concession_card}>
          <div className={styles.plus} />
          <button className={styles.yearcard} type="submit">年卡特惠价</button>
        </div>
      </div>
    </div>

  );
};

export default withRouter(MyinfocardUi);
