import axios from 'axios';
// import * as actionTypeconst from './actionTypeconst';
import { actionTypeconst } from './index';

const loginintype = (j) => ({
  type: actionTypeconst.LONGIN_IN_DATA,
  Islogin: j,
});

export const loginin = (account, password) => (dispatch) => {
  // axios.get('./login.json?account=' + account + '&password=' + password)
  axios.get('/api/login.json')
    .then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(loginintype(result));
      } else {
        alert('请您输入正确的账号和密码');
      }
      //
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logout = (j) => ({
  type: actionTypeconst.LONGIN_OUT_DATA,
  Islogin: j,
});
