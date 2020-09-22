import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/publicui/header/styles.less';

const CountDownUi = () => {
  const skroundtitleRef = useRef();
  const hoursnumberRef = useRef();
  const minutesnumberRef = useRef();
  const secondsnumberRef = useRef();

  let hoursdata = null;
  let minutesdata = null;
  let secondsdata = null;
  const skround = ['0点场', '6点场', '8点场', '10点场', '12点场', '14点场', '16点场', '18点场', '20点场', '22点场'];
  const intervaltime = [6, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  let currenttime = null;
  let skroundtitle = null;
  let intervaltimenumber = null;
  let hoursnumber = null;
  let minutesnumber = null;
  let secondsnumber = null;
  let lefttimetimer = null;
  let i = null;

  const getcurrenttime = () => {
    // 确定进场时间段
    currenttime = new Date();
    hoursdata = currenttime.getHours();
    minutesdata = currenttime.getMinutes();
    secondsdata = currenttime.getSeconds();
    if ((hoursdata === 0) || (hoursdata === 1) || (hoursdata === 2) || (hoursdata === 3) || (hoursdata === 4) || (hoursdata === 5)) { i = 0; } else if ((hoursdata === 6) || (hoursdata === 7)) { i = 1; } else if ((hoursdata === 8) || (hoursdata === 9)) { i = 2; } else if ((hoursdata === 10) || (hoursdata === 11)) { i = 3; } else if ((hoursdata === 12) || (hoursdata === 13)) { i = 4; } else if ((hoursdata === 14) || (hoursdata === 15)) { i = 5; } else if ((hoursdata === 16) || (hoursdata === 17)) { i = 6; } else if ((hoursdata === 18) || (hoursdata === 19)) { i = 7; } else if ((hoursdata === 20) || (hoursdata === 21)) { i = 8; } else if ((hoursdata === 22) || (hoursdata === 23)) { i = 9; }
    // console.log(i)
    // 确定是什么场次
    skroundtitle = skround[i];
    // 进一步确定场次间隔时间
    intervaltimenumber = parseInt(skroundtitle, 10) + intervaltime[i] - 1;
    // 计算每个场次的小时，分钟 秒的剩余时间
    if ((intervaltimenumber - hoursdata) < 10) { // 如果是个位数，前面加一个零
      hoursnumber = `0${(intervaltimenumber - hoursdata).toString()}`;
    } else {
      hoursnumber = (intervaltimenumber - hoursdata).toString();
    }

    if ((59 - minutesdata) < 10) {
      minutesnumber = `0${(59 - minutesdata).toString()}`;
    } else {
      minutesnumber = (59 - minutesdata).toString();
    }

    if ((59 - secondsdata) < 10) {
      secondsnumber = `0${(59 - secondsdata).toString()}`;
    } else {
      secondsnumber = (59 - secondsdata).toString();
    }
    skroundtitleRef.current.innerText = skroundtitle;
    hoursnumberRef.current.innerText = hoursnumber;
    minutesnumberRef.current.innerText = minutesnumber;
    secondsnumberRef.current.innerText = secondsnumber;
  };
  useEffect(() => {
    lefttimetimer = setInterval(getcurrenttime, 1000);
    return () => clearInterval(lefttimetimer);
    // setInterval(getcurrenttime,1000)
    // console.log('2',getcurrenttime().hoursnumber,getcurrenttime().minutesnumber,getcurrenttime().secondsnumber)
  });
  return (
    <>
      <div id="countdownwrap" className={styles.countdownwrap}>
        <div id="sectionround" ref={skroundtitleRef}>
          {skroundtitle}
        </div>
        <div id="countdown" className={styles.countdown}>
          <span ref={hoursnumberRef} className="hourcountdown">{ hoursnumber}</span>
          <span>:</span>
          <span ref={minutesnumberRef} className="minutecountdown">{ minutesnumber }</span>
          <span>:</span>
          <span ref={secondsnumberRef} className="secondcountdown">{ secondsnumber }</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(CountDownUi);
