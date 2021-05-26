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

        case actionTypes.TRAVEL_APROVED: {

            console.log("actual state TRAVEL_APROVED",state)

            let pos=-1;
            let travel = state.travels.content.filter(function(item, index) { pos = index; return item.orderNumber == action.payload; });
            travel["status"]="aproved"
            let travels =[...state.travels.content,travel]
            return { ...state, 
                travels: travels
            };
        }

        default:
            return state;

    }
}

export default travelReducer;
