import { actionTypeconst } from '@/pages/login2/store';
import { fromJS } from 'immutable';
// immutable库，对象，保证state无法改变

const defaultState = fromJS({
  username: '',
  password: '',
  islogined: false,

});

export default (state = defaultState, action) => {
  if (action.type === actionTypeconst.LOGIN_INPUT_INFO) {
    return state.merge({
      username: fromJS(action.username),
      password: fromJS(action.password),
      islogined: fromJS(action.islogined),
    });
  } if (action.type === actionTypeconst.LOGOUT_ACTION) {
    return state.merge({
      username: fromJS(action.username),
      islogined: fromJS(action.islogined),
    });
  }

  return state;
};
