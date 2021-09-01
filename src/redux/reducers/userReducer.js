import * as actionTypes from '../actions/actionTypes';

var initialState = {
    drivers: [],
    cars:[],
    isLoading:true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_DRIVERS: {
            return { ...state, 
                drivers: action.payload
            };
        }

        default:
            return state;
    }

}

export default userReducer;