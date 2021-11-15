import { combineReducers } from 'redux';
import travelReducer from './travelReducer';
import voucherReducer from './voucherReducer';
import userReducer from './userReducer';
import companyReducer from './companyReducer';


const rootReducer = combineReducers({
    travelReducer,
    voucherReducer,
    userReducer,
    companyReducer
});

export default rootReducer;