import { combineReducers } from 'redux';
import travelReducer from './travelReducer';
import voucherReducer from './voucherReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    travelReducer,
    voucherReducer,
    userReducer
});

export default rootReducer;