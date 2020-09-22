import axios from 'axios';
import { fromJS } from 'immutable';
import { actionTypeconst } from '@/pages/cartlogined/store';

export const initskuinfoaction = (skuinfo) => ({
    type: actionTypeconst.INIT_SKU_INFO,
    skuinfo,
});

export const deleteskuinfoaction = (username, sku) => ({
    type: actionTypeconst.DELETE_SKU_INFO,
    username,
    sku,
})

export const toggleinputitemcheckaction = (username, sku, isChecked) => ({
    type: actionTypeconst.TOGGLE_SKUINFOLIST,
    username,
    sku,
    isChecked,
})

export const changeskulistnumberaction = (username, sku, number) => ({
    type: actionTypeconst.CHANGE_SKULIST_NUMBER,
    username,
    sku,
    number,
})

export const skucheckedstatusaction = (isAllChecked) => ({
    type: actionTypeconst.SKUCHECKED_STATUS,
    isAllChecked,
})
