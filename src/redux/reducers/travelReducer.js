import * as actionTypes from '../actions/actionTypes';

var initialState = {
    travels: [],
    isLoading:true
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_TRAVELS: {
            return { ...state, 
                tasks: action.payload,
                isLoading:false
            };
        }

        default:
            return state;

    }
}

export default todoReducer;
