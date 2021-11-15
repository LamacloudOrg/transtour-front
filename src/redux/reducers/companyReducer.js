import * as actionTypes from '../actions/actionTypes';

var initialState = {
    companies: [],
    isLoading:true
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_COMPANY: {
            return { ...state, 
                companies: action.payload
            };
        }

        default:
            return state;
    }

}

export default companyReducer;