/* 由于使用redux-persist combineReduers 需要直接从redux从引入， */
// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import productioninfoReducer from '@/pages/productioninfo/store/reducer';
import { login2Reducer } from '@/pages/login2/store';
import { cartloginedReducer } from '@/pages/cartlogined/store';
// import  { logoutReducer }  from '@/pages/myinfo/myinfocard/store';

const reducer = combineReducers({
  productioninfo: productioninfoReducer,
  login2: login2Reducer,
  cartlogined: cartloginedReducer,

});

export default reducer;
