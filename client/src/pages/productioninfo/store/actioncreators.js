import axios from 'axios';
import { fromJS } from 'immutable';
import { ADD_CART_LIST, DELETE_CART_LIST, INIT_USERNAME_CARTLIST } from '@/pages/productioninfo/store/actionTypeconst';

export const initusernamecartlistaction = (username) => ({
  type: INIT_USERNAME_CARTLIST,
  username: fromJS(username),
});

export const addcartlistaction = (username, sku) => ({
  type: ADD_CART_LIST,
  username: fromJS(username),
  sku: fromJS(sku),
});

export const delectcartlistaction = (username, sku) => ({
  type: DELETE_CART_LIST,
  username: fromJS(username),
  sku: fromJS(sku),
});
