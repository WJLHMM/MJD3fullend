import axios from 'axios';
import { fromJS } from 'immutable';
import { actionTypeconst } from '@/pages/login2/store';

export const userinfosubmitaction = (username, password, islogined) => ({
  type: actionTypeconst.LOGIN_INPUT_INFO,
  username,
  password,
  islogined,
});

export const logoutaction = () => ({
  type: actionTypeconst.LOGOUT_ACTION,
  islogined: false,
  username: '',
});
