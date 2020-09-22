// import * as actionTypeconst  from './actionTypeconst';
import { fromJS } from 'immutable';
import { actionTypeconst } from './index';
// immutable库，对象，保证state无法改变

const defaultState = fromJS({
  Islogin: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypeconst.LONGIN_IN_DATA: return state.set(
      'Islogin', action.Islogin,
    );
    case actionTypeconst.LONGIN_OUT_DATA: return state.set(
      'Islogin', action.Islogin,
    );

    default: return state;
  }
};
