import { ADD_CART_LIST, DELETE_CART_LIST, INIT_USERNAME_CARTLIST } from '@/pages/productioninfo/store/actionTypeconst';
import { fromJS } from 'immutable';
// immutable库，对象，保证state无法改变

const defaultState = fromJS({
  cartskulist: { },
});

export default (state = defaultState, action) => {
  // const { username } = action;s
  if (action.type === INIT_USERNAME_CARTLIST) {
    /*
      record skulist added to cart,handleaddcartlist event in LazySelectedBar '@/pages/productioninfo/selectedbar'
      design for more usernames,one list to one username,
      so first, judge if the map of cartskulist includes current username logined,
      if not add a object{ username:[...skulist ]},if yes,take the else logical
      be careful  all api are immutable'api
     */
    const skulistObj = state.cartskulist || state.get('cartskulist')
    if (Object.keys(skulistObj).indexOf(action.username) === -1) {
      const cartskulist = { };
      cartskulist[action.username] = [];
      return state.mergeDeep({
        cartskulist,
      });
    }
  }

  if (action.type === ADD_CART_LIST) {
    const newlist = state.getIn(['cartskulist', `${action.username}`]);
    newlist.push(action.sku);
    return state.setIn(['cartskulist', `${action.username}`], Array.from(new Set(newlist)));
  }

  if (action.type === DELETE_CART_LIST) {
    const newlist = state.getIn(['cartskulist', `${action.username}`]);
    const index = newlist.indexOf(action.sku)
    if (index != -1) {
      newlist.splice(index, 1)
    }
    return state.setIn(['cartskulist'], { [`${action.username}`]:newlist });
  }
  return state
};
