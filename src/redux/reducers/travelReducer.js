import * as actionTypes from '../actions/actionTypes';

var initialState = {
    travels: [],
    isLoading:true
}

const travelReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_TRAVELS: {
            return { ...state, 
                travels: action.payload
            };
        }

        default:
            return state;

    }
}

export default travelReducer;
