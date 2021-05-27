import { combineReducers } from 'redux';
import travelReducer from './travelReducer';
import voucherReducer from './voucherReducer';


const rootReducer = combineReducers({
    travelReducer,
    voucherReducer
});

export default rootReducer;