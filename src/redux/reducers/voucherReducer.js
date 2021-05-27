import * as actionTypes from '../actions/actionTypes';
import {parserNumber}  from '../../helper/OrderNumberHelper'

var initialState = {
    vouchers:[]
}

const voucherReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.DOWNLOAD_VOUCHER:{
            //TODO ver que accion realizar.
            return state;
        }

        case actionTypes.LOAD_VOUCHERS:{
            return { ...state, 
                vouchers: action.payload
            };
        }

        default:
            return state;

    }
}

export default voucherReducer;
