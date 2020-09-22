import { actionTypeconst } from '@/pages/cartlogined/store';
import { fromJS } from 'immutable';
// immutable库，对象，保证state无法改变

const defaultState = fromJS({
  skuinfolist: [],
  subitemcheckstatus: true,
});

export default (state = defaultState, action) => {
  if (action.type === actionTypeconst.INIT_SKU_INFO) {
    /*filter the item of the same username and sku*/
    // const templist = state.get('skuinfolist').filter((item) => ((item.username != action.skuinfo.username) && (item.sku != action.skuinfo.sku)))
    // console.log(templist)
    return state.merge({
      skuinfolist:[...state.get('skuinfolist'), action.skuinfo],
    });
  }
  if (action.type === actionTypeconst.DELETE_SKU_INFO) {
    const skuinfolistjs = state.get('skuinfolist')
    /*filter the item of the same username and sku*/
    const skuinfolistchanged = skuinfolistjs.filter((item) => (item.username == action.username && item.sku != action.sku))
    return state.merge({
      skuinfolist:[...skuinfolistchanged],
    });
  }
  if (action.type === actionTypeconst.TOGGLE_SKUINFOLIST) {
    const skuinfolistjs = state.get('skuinfolist')
    /*filter the item of the same username and sku*/
    const skuinfolistnochanged = skuinfolistjs.filter((item) => (item.username == action.username && item.sku != action.sku))
    const skuinfolistchanged = skuinfolistjs.filter((item) => (item.username == action.username && item.sku == action.sku))
    skuinfolistchanged[0].checked = action.isChecked
    const newskuinfolist = [...skuinfolistnochanged, ...skuinfolistchanged]
    return state.merge({
      skuinfolist:[...newskuinfolist],
    });
  }
  if (action.type === actionTypeconst.CHANGE_SKULIST_NUMBER) {
    const skuinfolistjs = state.get('skuinfolist')
    /*filter the item of the same username and sku*/
    const skuinfolistnochanged = skuinfolistjs.filter((item) => (item.username == action.username && item.sku != action.sku))
    const skuinfolistchanged = skuinfolistjs.filter((item) => (item.username == action.username && item.sku == action.sku))
    skuinfolistchanged[0].number = action.number
    return state.merge({
      skuinfolist:[...skuinfolistnochanged, ...skuinfolistchanged],
    });
  }
  if (action.type === actionTypeconst.SKUCHECKED_STATUS) {
    return state.merge({
      subitemcheckstatus:action.isAllChecked,
    });
  }

  return state;
};
